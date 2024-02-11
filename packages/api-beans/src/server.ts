import * as express from 'express';
import {createSchema, createYoga} from 'graphql-yoga';
import {mergeResolvers, mergeTypeDefs} from '@graphql-tools/merge';
import {entitySchemas} from './entities';
import {scalarDefs, scalarResolvers} from './graphql/scalars';
import {resolverTypeDefs, resolvers as baseResolvers} from './resolvers';

export const typeDefs = mergeTypeDefs([
  scalarDefs,
  ...entitySchemas,
  ...resolverTypeDefs,
]);
const resolvers = mergeResolvers([scalarResolvers, baseResolvers]);

async function execute(): Promise<void> {
  const app = express();

  const PATH = '/graphql';
  const PORT = 4010;
  const server = createYoga({
    graphqlEndpoint: PATH,
    schema: createSchema({
      typeDefs,
      resolvers,
    }),
    context: () => {},
    plugins: [],
  });
  app.use(PATH, server.requestListener);

  app.listen({port: PORT}, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

void execute();
