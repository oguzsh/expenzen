import { gql } from '@apollo/client';

const ALL_ACCOUNTS = gql`
  query allAccounts {
    accounts {
      id
      name
      balance
      accountType
    }
  }
`;

export { ALL_ACCOUNTS };
