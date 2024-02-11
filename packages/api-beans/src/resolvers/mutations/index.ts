import {mergeResolvers} from '@graphql-tools/merge';
import {tenantMutationResolver, tenantMutationResolverDefs} from './tenant';

export const mutationTypeDefs = [tenantMutationResolverDefs];
export const mutationResolver = mergeResolvers([tenantMutationResolver]);
