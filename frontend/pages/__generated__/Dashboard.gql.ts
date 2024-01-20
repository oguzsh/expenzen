import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../graphql/__generated__/types';
import { BaseLayoutUserData } from '../../layouts/__generated__/BaseLayout.gql';

const defaultOptions = {} as const;
export type UserDataVariables = Types.Exact<{ [key: string]: never }>;

export type UserData = {
  __typename?: 'Query';
  user: { __typename?: 'User'; id: string; firstName: string };
};

export const UserDataDocument = gql`
  query UserData {
    user {
      id
      ...BaseLayoutUserData
    }
  }
  ${BaseLayoutUserData}
`;

/**
 * __useUserData__
 *
 * To run a query within a React component, call `useUserData` and pass it any options that fit your needs.
 * When your component renders, `useUserData` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserData({
 *   variables: {
 *   },
 * });
 */
export function useUserData(
  baseOptions?: Apollo.QueryHookOptions<UserData, UserDataVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserData, UserDataVariables>(
    UserDataDocument,
    options,
  );
}
export function useUserDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserData, UserDataVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserData, UserDataVariables>(
    UserDataDocument,
    options,
  );
}
export type UserDataHookResult = ReturnType<typeof useUserData>;
export type UserDataLazyQueryHookResult = ReturnType<
  typeof useUserDataLazyQuery
>;
export type UserDataQueryResult = Apollo.QueryResult<
  UserData,
  UserDataVariables
>;
