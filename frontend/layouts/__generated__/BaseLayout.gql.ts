import { gql } from '@apollo/client';

import { HeaderUserData } from '../../components/Header/__generated__/header.gql';
import * as Types from '../../graphql/__generated__/types';

export type BaseLayoutUserData = {
  __typename?: 'User';
  id: string;
  firstName: string;
};

export type BaseLayoutUserDataVariables = Types.Exact<{ [key: string]: never }>;

export const BaseLayoutUserData = gql`
  fragment BaseLayoutUserData on User {
    id
    ...HeaderUserData
  }
  ${HeaderUserData}
`;
