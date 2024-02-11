import {GraphQLResolvers} from '@/.generated/graphql';

export const beanResolverDefs = /* GraphQL */ `
  input CreateBeanInput {
    name: String!
    description: String
  }

  type Mutation {
    createBean(input: CreateBeanInput!): Bean!
  }

  type Query {
    bean(beanId: UUID!): Bean!
    beans: [Bean]!
  }
`;

export const beanResolvers: GraphQLResolvers = {
  Query: {
    bean: async (_, {beanId}, {services: {beanService}}) => {
      return beanService.getBeanById(beanId);
    },
    beans: async (_, __, {services: {beanService}}) => {
      return beanService.getAllBeans();
    },
  },
  Mutation: {
    createBean: async (_, {input}, {services: {beanService}}) => {
      return beanService.createBean(input);
    },
  },
  Bean: {
    origin: async (parent, _, {loaders: {originLoader}}) => {
      if (!parent.originId) {
        return null;
      }
      return await originLoader.load(parent.originId);
    },
    roastLevel: async () => {
      return {
        __typename: 'RoastLevel',
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Roast Level',
        description: 'A test roast level',
        createdAt: new Date(),
        updatedAt: new Date(),
        beans: [],
      };
    },
    processingMethod: async () => {
      return {
        __typename: 'ProcessingMethod',
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Processing Method',
        description: 'A test processing method',
        createdAt: new Date(),
        updatedAt: new Date(),
        beans: [],
      };
    },
  },
};
