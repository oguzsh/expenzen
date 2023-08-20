import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../../../graphql/__generated__/types';

const defaultOptions = {} as const;
export type CreateAccountVariables = Types.Exact<{
  input: Types.CreateAccountInput;
}>;

export type CreateAccount = {
  __typename?: 'Mutation';
  createAccount: {
    __typename?: 'CreateAccountPayload';
    account: {
      __typename?: 'Account';
      id: string;
      name: string;
      accountType: string;
      balance: number;
      userId: number;
    };
  } | null;
};

export const CreateAccountDocument = gql`
  mutation CreateAccount($input: CreateAccountInput!) {
    createAccount(input: $input) {
      account {
        id
        name
        accountType
        balance
        userId
      }
    }
  }
`;
export type CreateAccountMutationFn = Apollo.MutationFunction<
  CreateAccount,
  CreateAccountVariables
>;

/**
 * __useCreateAccount__
 *
 * To run a mutation, you first call `useCreateAccount` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccount` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccount, { data, loading, error }] = useCreateAccount({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAccount(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAccount,
    CreateAccountVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAccount, CreateAccountVariables>(
    CreateAccountDocument,
    options,
  );
}
export type CreateAccountHookResult = ReturnType<typeof useCreateAccount>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccount>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateAccount,
  CreateAccountVariables
>;
