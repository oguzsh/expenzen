import { gql } from '@apollo/client';

import * as Types from '../../../graphql/__generated__/types';

export type TotalIncomeCardFinancialSummary = {
  __typename?: 'FinancialSummary';
  totalIncomes: number;
};

export type TotalIncomeCardFinancialSummaryVariables = Types.Exact<{
  [key: string]: never;
}>;

export const TotalIncomeCardFinancialSummary = gql`
  fragment TotalIncomeCardFinancialSummary on FinancialSummary {
    totalIncomes
  }
`;
