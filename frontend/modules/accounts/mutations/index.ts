import { gql } from '@apollo/client';

const CREATE_ACCOUNT = gql`
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

export { CREATE_ACCOUNT };
