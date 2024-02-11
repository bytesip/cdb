import {createSchema, createYoga} from 'graphql-yoga';
import {mergeResolvers, mergeTypeDefs} from '@graphql-tools/merge';

import {entitySchema} from './entities/index.ts';
import {scalarDefs, scalarResolvers} from './graphql';
import {resolverTypeDefs, resolvers} from './resolvers';

export const typeDefs = mergeTypeDefs([
  scalarDefs,
  ...entitySchema,
  ...resolverTypeDefs,
]);

const yoga = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: mergeResolvers([scalarResolvers, resolvers]),
  }),
});

if (import.meta.main) {
  serve(yoga, {
    onListen({hostname, port}) {
      console.log(
        `Listening on http://${hostname}:${port}/${yoga.graphqlEndpoint}`
      );
    },
  });
}
