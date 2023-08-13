import type { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  overwrite: true,
  schema: 'schema.graphql',
  documents: 'frontend/**/*.{ts,tsx}',
  generates: {
    'frontend/graphql/types.ts': { plugins: ['typescript'] },
    'frontend/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.ts',
        folder: '__generated__',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
