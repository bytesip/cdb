import {IResolvers} from '@/.generated/graphql';

export const beanResolverDefs = /* GraphQL */ `
  input CreateBeanInput {
    name: String!
    description: String
    origin: CreateOriginInput
  }

  type Mutation {
    createBean(input: CreateBeanInput!): Bean!
  }

  type Query {
    bean(beanId: UUID!): Bean!
    beans: [Bean]!
  }
`;

export const beanResolvers: IResolvers = {
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
    roastLevel: async (parent, _, {loaders: {roastLevelLoader}}) => {
      if (!parent.roastLevelId) {
        return null;
      }
      return await roastLevelLoader.load(parent.roastLevelId);
    },
    processingMethod: async (
      parent,
      _,
      {loaders: {processingMethodLoader}}
    ) => {
      if (!parent.processingMethodId) {
        return null;
      }
      return await processingMethodLoader.load(parent.processingMethodId);
    },
  },
};
