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
  typesPrefix: 'GraphQL',
};

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4010/graphql',
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
      },
    },
  },
};

export default config;
