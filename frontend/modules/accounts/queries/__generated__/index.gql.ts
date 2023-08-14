import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../../../graphql/__generated__/types';

const defaultOptions = {} as const;
export type AllAccountsVariables = Types.Exact<{ [key: string]: never }>;

export type AllAccounts = {
  __typename?: 'Query';
  accounts: Array<{
    __typename?: 'Account';
    id: string;
    name: string;
    balance: number;
    accountType: string;
  }>;
};

export const AllAccountsDocument = gql`
  query allAccounts {
    accounts {
      id
      name
      balance
      accountType
    }
  }
`;

/**
 * __useAllAccounts__
 *
 * To run a query within a React component, call `useAllAccounts` and pass it any options that fit your needs.
 * When your component renders, `useAllAccounts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAccounts({
 *   variables: {
 *   },
 * });
 */
export function useAllAccounts(
  baseOptions?: Apollo.QueryHookOptions<AllAccounts, AllAccountsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAccounts, AllAccountsVariables>(
    AllAccountsDocument,
    options,
  );
}
export function useAllAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllAccounts, AllAccountsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAccounts, AllAccountsVariables>(
    AllAccountsDocument,
    options,
  );
}
export type AllAccountsHookResult = ReturnType<typeof useAllAccounts>;
export type AllAccountsLazyQueryHookResult = ReturnType<
  typeof useAllAccountsLazyQuery
>;
export type AllAccountsQueryResult = Apollo.QueryResult<
  AllAccounts,
  AllAccountsVariables
>;
