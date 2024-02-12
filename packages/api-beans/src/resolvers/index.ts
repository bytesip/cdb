import {beanResolverDefs, beanResolvers} from './bean';
import {originResolverDefs, originResolvers} from './origin';

export const resolverTypeDefs = [beanResolverDefs, originResolverDefs];
export const resolvers = [beanResolvers, originResolvers];
