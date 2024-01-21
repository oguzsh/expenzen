import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import { TotalBalanceCardFinancialSummary } from '../../components/TotalBalanceCard/__generated__/TotalBalanceCard.gql';
import { TotalIncomeCardFinancialSummary } from '../../components/TotalIncomeCard/__generated__/TotalIncomeCard.gql';
import * as Types from '../../graphql/__generated__/types';
import { BaseLayoutUserData } from '../../layouts/__generated__/BaseLayout.gql';

const defaultOptions = {} as const;
export type DashboardDataVariables = Types.Exact<{ [key: string]: never }>;

export type DashboardData = {
  __typename?: 'Query';
  user: { __typename?: 'User'; id: string; firstName: string };
  financialSummary: {
    __typename?: 'FinancialSummary';
    totalBalance: number;
    totalSavingsByCurrentMonth: number;
    totalIncomes: number;
  } | null;
};

export const DashboardDataDocument = gql`
  query DashboardData {
    user {
      id
      ...BaseLayoutUserData
    }
    financialSummary {
      ...TotalBalanceCardFinancialSummary
      ...TotalIncomeCardFinancialSummary
    }
  }
  ${BaseLayoutUserData}
  ${TotalBalanceCardFinancialSummary}
  ${TotalIncomeCardFinancialSummary}
`;

/**
 * __useDashboardData__
 *
 * To run a query within a React component, call `useDashboardData` and pass it any options that fit your needs.
 * When your component renders, `useDashboardData` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardData({
 *   variables: {
 *   },
 * });
 */
export function useDashboardData(
  baseOptions?: Apollo.QueryHookOptions<DashboardData, DashboardDataVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DashboardData, DashboardDataVariables>(
    DashboardDataDocument,
    options,
  );
}
export function useDashboardDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardData,
    DashboardDataVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DashboardData, DashboardDataVariables>(
    DashboardDataDocument,
    options,
  );
}
export type DashboardDataHookResult = ReturnType<typeof useDashboardData>;
export type DashboardDataLazyQueryHookResult = ReturnType<
  typeof useDashboardDataLazyQuery
>;
export type DashboardDataQueryResult = Apollo.QueryResult<
  DashboardData,
  DashboardDataVariables
>;
