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

class NotFoundError extends GraphQLError implements INotFoundError, Error {
  name: string = 'NotFoundError';
  entity?: string | null | undefined;
  id?: string | null | undefined;

  constructor(code: string, message: string, entity?: string, id?: string) {
    super(code, message);
    this.entity = entity;
    this.id = id;
  }
}

class ConflictError extends GraphQLError implements IConflictError {
  name: string = 'ConflictError';
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
      __typename: error.name,
      ...error,
    };
  }

  throw error;
};

export function ErrorCapture<T extends {new (...args: unknown[]): object}>(
  constructor: T
) {
  const methods = Object.getOwnPropertyNames(constructor.prototype).filter(
    name => name !== 'constructor'
  );

  methods.forEach(method => {
    const original = constructor.prototype[method];
    constructor.prototype[method] = async function (...args: unknown[]) {
      try {
        return await original.apply(this, args);
      } catch (error) {
        return errorHandler(error);
      }
    };
  });
}
