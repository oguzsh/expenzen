import { gql } from '@apollo/client';

import * as Types from '../../../../graphql/__generated__/types';
import { ProfileUserData } from '../../Profile/__generated__/Profile.gql';

export type HeaderUserData = {
  __typename?: 'User';
  id: string;
  firstName: string;
};

export type HeaderUserDataVariables = Types.Exact<{ [key: string]: never }>;

export const HeaderUserData = gql`
  fragment HeaderUserData on User {
    id
    ...ProfileUserData
  }
  ${ProfileUserData}
`;
