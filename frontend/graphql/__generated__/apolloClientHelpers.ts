import type {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';

export type AccountKeySpecifier = (
  | 'accountType'
  | 'balance'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | 'userId'
  | AccountKeySpecifier
)[];
export type AccountFieldPolicy = {
  accountType?: FieldPolicy<any> | FieldReadFunction<any>;
  balance?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
  | 'id'
  | 'name'
  | 'transactions'
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateAccountPayloadKeySpecifier = (
  | 'account'
  | 'clientMutationId'
  | CreateAccountPayloadKeySpecifier
)[];
export type CreateAccountPayloadFieldPolicy = {
  account?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteAccountPayloadKeySpecifier = (
  | 'clientMutationId'
  | 'errors'
  | 'success'
  | DeleteAccountPayloadKeySpecifier
)[];
export type DeleteAccountPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteTransactionPayloadKeySpecifier = (
  | 'clientMutationId'
  | 'errors'
  | 'success'
  | DeleteTransactionPayloadKeySpecifier
)[];
export type DeleteTransactionPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createAccount'
  | 'createTransaction'
  | 'deleteAccount'
  | 'deleteTransaction'
  | 'updateAccount'
  | 'updateTransaction'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  createTransaction?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTransaction?: FieldPolicy<any> | FieldReadFunction<any>;
  updateAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTransaction?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'accounts'
  | 'transactions'
  | 'user'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TransactionKeySpecifier = (
  | 'account'
  | 'amount'
  | 'category'
  | 'id'
  | 'note'
  | 'transactionDate'
  | 'transactionType'
  | TransactionKeySpecifier
)[];
export type TransactionFieldPolicy = {
  account?: FieldPolicy<any> | FieldReadFunction<any>;
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  note?: FieldPolicy<any> | FieldReadFunction<any>;
  transactionDate?: FieldPolicy<any> | FieldReadFunction<any>;
  transactionType?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'createdAt'
  | 'email'
  | 'firstName'
  | 'fullName'
  | 'fullNameWithMiddle'
  | 'id'
  | 'lastName'
  | 'updatedAt'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  fullName?: FieldPolicy<any> | FieldReadFunction<any>;
  fullNameWithMiddle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Account?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AccountKeySpecifier
      | (() => undefined | AccountKeySpecifier);
    fields?: AccountFieldPolicy;
  };
  Category?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CategoryKeySpecifier
      | (() => undefined | CategoryKeySpecifier);
    fields?: CategoryFieldPolicy;
  };
  CreateAccountPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateAccountPayloadKeySpecifier
      | (() => undefined | CreateAccountPayloadKeySpecifier);
    fields?: CreateAccountPayloadFieldPolicy;
  };
  DeleteAccountPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteAccountPayloadKeySpecifier
      | (() => undefined | DeleteAccountPayloadKeySpecifier);
    fields?: DeleteAccountPayloadFieldPolicy;
  };
  DeleteTransactionPayload?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteTransactionPayloadKeySpecifier
      | (() => undefined | DeleteTransactionPayloadKeySpecifier);
    fields?: DeleteTransactionPayloadFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Transaction?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TransactionKeySpecifier
      | (() => undefined | TransactionKeySpecifier);
    fields?: TransactionFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
