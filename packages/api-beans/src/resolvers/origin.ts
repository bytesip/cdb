import {IResolvers} from '@/.generated/graphql';

export const originResolverDefs = /* GraphQL */ `
  type Query {
    origin(originId: UUID!): Origin!
    origins: [Origin]!
  }

  input CreateOriginInput {
    id: UUID
    name: String!
    description: String
    longitude: Longitude
    latitude: Latitude
  }
  type Mutation {
    createOrigin(input: CreateOriginInput!): Origin!
  }
`;

export const originResolvers: IResolvers = {
  Query: {
    origin: async (_, {originId}, {services: {originService}}) => {
      return originService.getOriginById(originId);
    },
    origins: async (_, __, {services: {originService}}) => {
      return originService.getAllOrigins();
    },
  },
  Mutation: {
    createOrigin: async (_, {input}, {services: {originService}}) => {
      return originService.createOrigin(input);
    },
  },
};
