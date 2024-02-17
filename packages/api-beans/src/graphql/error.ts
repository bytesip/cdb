import {
  IGraphQlError,
  INotFoundError,
  IConflictError,
} from '@/.generated/graphql';
import {Prisma} from '@cdb/prisma';

export const ErrorSchema = /* GraphQL */ `
  interface GraphQLError {
    code: String!
    message: String!
  }

  type NotFoundError implements GraphQLError {
    code: String!
    message: String!
    entity: String
    id: String
  }

  type ConflictError implements GraphQLError {
    code: String!
    message: String!
  }
`;

class GraphQLError implements IGraphQlError {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

class NotFoundError extends GraphQLError implements INotFoundError {
  entity?: string | null | undefined;
  id?: string | null | undefined;

  constructor(code: string, message: string, entity?: string, id?: string) {
    super(code, message);
    this.entity = entity;
    this.id = id;
  }
}

class ConflictError extends GraphQLError implements IConflictError {
  constructor(code: string, message: string) {
    super(code, message);
  }
}

export {NotFoundError, ConflictError};

const errorHandler = (error: Error) => {
  if (error instanceof GraphQLError) {
    return {
      ...error,
      __typename: error.name,
    };
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const error = new ConflictError(
      'prisma.conflict_error',
      'prisma has been ended up conflict status'
    );
    return {
      __typename: 'ConflictError',
      ...error,
    };
  }

  throw error;
};

export function ErrorCapture() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = async function () {
      try {
        // eslint-disable-next-line prefer-rest-params
        return await method.apply(this, arguments);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        return errorHandler(e);
      }
    };
  };
}
