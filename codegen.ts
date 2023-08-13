import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '/schema.graphql',
  documents: 'frontend/**/*.ts{x}',
  generates: {
    'frontend/graphql/types.ts': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
