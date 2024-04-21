import type {CodegenConfig} from '@graphql-codegen/cli';
import {TypeScriptResolversPluginConfig} from '@graphql-codegen/typescript-resolvers';
import {scalarMapForCodegen} from './src/graphql/scalars';

const sharedPluginConfig: Pick<
  TypeScriptResolversPluginConfig,
  'scalars' | 'typesPrefix'
> = {
  scalars: {
    ...scalarMapForCodegen,
  },
  typesPrefix: 'I',
};

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/.generated//schema.graphql',
  debug: true,
  generates: {
    'src/.generated/graphql.ts': {
      // plugins: ['typescript', 'typescript-resolvers'],
      plugins: [
        // {
        //   // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
        //   typescriptOperations: {
        //     ...sharedPluginConfig,
        //     strictScalars: true,
        //   },
        // },
        {
          // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript
          typescript: {
            ...sharedPluginConfig,
          },
        },
        {
          // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers
          'typescript-resolvers': {
            ...sharedPluginConfig,
          },
        },
      ],
      config: {
        contextType: '@/graphql/context#Context',
        maybeValue:
          'T extends PromiseLike<infer U> ? Promise<U | null> : T | null',
      },
    },
  },
};

export default config;
