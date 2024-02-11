import {GraphQLMutationResolvers, GraphQLBean} from '../../.generated/graphql';

export const beanMutationResolverDefs = /* GraphQL */ `
  input CreateBeanInput {
    name: String!
  }

  type Mutation {
    createBean(input: CreateBeanInput): Bean
  }
`;

export const beanMutationResolvers: Pick<
  GraphQLMutationResolvers,
  'createBean'
> = {
  createBean: async () => {
    return {
      __typename: 'Bean',
      id: '0d505571-4b65-44eb-a40d-d20f9af17daf',
      name: 'Test Bean',
      description: 'A test bean',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as GraphQLBean;
  },
};
