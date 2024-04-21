import {IResolvers} from '@/.generated/graphql';

export const originResolverDefs = /* GraphQL */ `
  input OriginWhereInput {
    q: String
    name: String
  }
  union OriginResults = Origin | NotFoundError
  type Query {
    origin(originId: UUID!): OriginResults!
    origins: [Origin]!
    searchOrigins(where: OriginWhereInput!): [Origin]!
  }

  input CreateOriginInput {
    id: UUID
    name: String!
    description: String
    longitude: Longitude
    latitude: Latitude
  }

  union CreateOriginResults = Origin | ConflictError
  type Mutation {
    createOrigin(input: CreateOriginInput!): CreateOriginResults!
  }
`;

export const originResolvers: IResolvers = {
  OriginResults: {
    __resolveType: obj => {
      return obj.__typename ?? 'Origin';
    },
  },
  CreateOriginResults: {
    __resolveType: obj => {
      return obj.__typename ?? 'Origin';
    },
  },
  Query: {
    origin: async (_, {originId}, {services: {originService}}) => {
      return originService.getOriginById(originId);
    },
    origins: async (_, __, {services: {originService}}) => {
      return originService.getAllOrigins();
    },
    searchOrigins: async (_, {where}, {services: {originService}}) => {
      return originService.searchOrigin(where);
    },
  },
  Mutation: {
    createOrigin: async (_, {input}, {services: {originService}}) => {
      return originService.createOrigin(input);
    },
  },
};
