import { gql } from '@apollo/client';

import * as Types from '../../../graphql/__generated__/types';

export type TotalBalanceCardFinancialSummary = {
  __typename?: 'FinancialSummary';
  totalBalance: number;
  totalSavingsByCurrentMonth: number;
};

export type TotalBalanceCardFinancialSummaryVariables = Types.Exact<{
  [key: string]: never;
}>;

export const TotalBalanceCardFinancialSummary = gql`
  fragment TotalBalanceCardFinancialSummary on FinancialSummary {
    totalBalance
    totalSavingsByCurrentMonth
  }
`;
