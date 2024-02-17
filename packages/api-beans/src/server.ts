import 'reflect-metadata';
import express from 'express';
import {createSchema, createYoga} from 'graphql-yoga';
import {mergeResolvers, mergeTypeDefs} from '@graphql-tools/merge';
import {entitySchemas} from './entities';
import {scalarDefs, scalarResolvers} from '@/graphql/scalars';
import {createContext, initializeDIContainer} from '@/graphql/context';
import {ErrorSchema} from '@/graphql/error';
import {resolverTypeDefs, resolvers as baseResolvers} from './resolvers';

export const typeDefs = mergeTypeDefs([
  scalarDefs,
  ...entitySchemas,
  ...resolverTypeDefs,
  ErrorSchema,
]);
const resolvers = mergeResolvers([scalarResolvers, ...baseResolvers]);
export const schema = createSchema({
  typeDefs,
  resolvers,
});

async function execute(): Promise<void> {
  initializeDIContainer();

  const app = express();

  const PATH = '/graphql';
  const PORT = 4010;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- FIXME: Do not use any as a type annotation
  const server = createYoga<any, any>({
    graphqlEndpoint: PATH,
    schema,
    context: createContext,
    plugins: [],
  });
  app.use(PATH, server.requestListener);

  app.listen({port: PORT}, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

if (require.main === module) {
  execute();
}
