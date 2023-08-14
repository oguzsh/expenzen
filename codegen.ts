import type { CodegenConfig } from '@graphql-codegen/cli';

const excludedFiles = ['!**/__generated__/**/*', '!**/node_modules/**/*'];

const nearOperationPresetCommon = {
  preset: 'near-operation-file',
  presetConfig: {
    baseTypesPath: 'graphql/__generated__/types.ts',
    extension: '.gql.ts',
    folder: '__generated__',
  },
  plugins: ['typescript-operations', 'typescript-react-apollo'],
  config: {
    avoidOptionals: {
      field: true,
      inputValue: true,
      object: false,
      defaultValue: true,
    },
    experimentalFragmentVariables: true,
    inlineFragmentType: 'combine',
    omitOperationSuffix: true,
  },
};

const config: CodegenConfig = {
  overwrite: true,
  config: {
    enumAsConst: true,
    namingConvention: {
      enumValues: 'keep',
    },
    strictScalars: true,
    scalars: {
      Base64Image: 'string',
      BigInt: 'string',
      Date: 'string',
      Decimal: 'string',
      Fingerprint: 'string',
      FourDigitYear: 'number',
      Hour: 'number',
      ISO8601Date: 'string',
      ISO8601DateTime: 'string',
      JSON: 'Record<string, any>',
      JsonChunk: 'Record<string, any>',
      join__FieldSet: 'any',
      link__Import: 'any',
    },
    useImplementingTypes: true,
  },
  schema: 'app/graphql/schema.graphql',
  generates: {
    'frontend/': {
      ...nearOperationPresetCommon,
      preset: 'near-operation-file',
      hooks: {
        afterOneFileWrite: ['yarn prettier --write'],
      },
      documents: ['frontend/**/*.{ts,tsx,js,jsx}', ...excludedFiles],
    },
    'frontend/graphql/__generated__/apolloClientOptions.ts': {
      plugins: ['fragment-matcher'],
      config: {
        useExplicitTyping: true,
      },
      hooks: {
        afterOneFileWrite: ['yarn prettier --write'],
      },
    },
    'frontend/graphql/__generated__/apolloClientHelpers.ts': {
      plugins: ['typescript-apollo-client-helpers'],
      config: {
        useTypeImports: true,
      },
      hooks: {
        afterOneFileWrite: ['yarn prettier --write'],
      },
    },
    'frontend/graphql/__generated__/types.ts': { plugins: ['typescript'] },
  },
};

export default config;
