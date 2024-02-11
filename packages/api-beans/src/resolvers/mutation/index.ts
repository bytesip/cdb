import {mergeResolvers} from '@graphql-tools/merge';
import {beanMutationResolverDefs, beanMutationResolvers} from './bean';

const resolvers = [beanMutationResolvers];
export const mutationTypeDefs = [beanMutationResolverDefs];

export const mutationResolver = {
  Mutation: mergeResolvers(resolvers),
};
