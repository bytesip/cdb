import {GraphQLQueryResolvers} from '../../.generated/graphql';

export const beanQueryResolverDefs = /* GraphQL */ `
  type Query {
    bean(beanId: UUID!): Bean
    beans: [Bean]
  }
`;

export const beanQueryResolvers: Pick<GraphQLQueryResolvers, 'bean' | 'beans'> =
  {};
