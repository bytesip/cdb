import {mergeResolvers} from '@graphql-tools/merge';
import {beanQueryResolverDefs, beanQueryResolvers} from './bean';

const resolvers = [beanQueryResolvers];
export const queryTypeDefs = [beanQueryResolverDefs];

export const queryResolver = {
  Query: mergeResolvers(resolvers),
};
