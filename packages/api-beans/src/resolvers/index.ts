import {mergeResolvers} from '@graphql-tools/merge';

import {queryResolver, queryTypeDefs} from './queries';
import {mutationResolver, mutationTypeDefs} from './mutation';

import {GraphQLResolvers} from '../.generated/graphql';

export const resolverTypeDefs = [...queryTypeDefs, ...mutationTypeDefs];
export const resolvers: GraphQLResolvers = mergeResolvers([
  queryResolver,
  mutationResolver,
]);
