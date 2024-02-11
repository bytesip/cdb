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
    bean: async (_, {beanId}, {beanService}) => {
      if (!beanService) {
        throw new Error('beanService not found');
      }
      return beanService.getBeanById(beanId);
    },
    beans: async (_, __, {beanService}) => {
      console.log('beanService', beanService);
      if (!beanService) {
        throw new Error('beanService not found');
      }
      return beanService.getAllBeans();
    },
  },
  Mutation: {
    createBean: async (_, {input}, {beanService}) => {
      if (!beanService) {
        throw new Error('beanService not found');
      }
      return beanService.createBean(input);
    },
  },
  Bean: {
    origin: async () => {
      return {
        __typename: 'Origin',
        id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
        name: 'Test Origin',
        description: 'A test origin',
        latitude: 0,
        longitude: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        beans: [],
      };
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
