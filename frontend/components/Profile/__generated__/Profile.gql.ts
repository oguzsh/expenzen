import { gql } from '@apollo/client';

import * as Types from '../../../graphql/__generated__/types';

export type ProfileUserData = {
  __typename?: 'User';
  id: string;
  firstName: string;
};

export type ProfileUserDataVariables = Types.Exact<{ [key: string]: never }>;

export const ProfileUserData = gql`
  fragment ProfileUserData on User {
    id
    firstName
  }
`;
