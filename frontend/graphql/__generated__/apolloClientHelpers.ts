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
export type ExpenseKeySpecifier = (
  | 'account'
  | 'category'
  | 'expenseDate'
  | 'id'
  | 'isRecurring'
  | 'recurringPeriod'
  | 'transactions'
  | 'user'
  | ExpenseKeySpecifier
)[];
export type ExpenseFieldPolicy = {
  account?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  expenseDate?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRecurring?: FieldPolicy<any> | FieldReadFunction<any>;
  recurringPeriod?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FinancialSummaryKeySpecifier = (
  | 'totalBalance'
  | 'totalExpenses'
  | 'totalIncomes'
  | 'totalSavings'
  | 'totalSavingsByCurrentMonth'
  | 'userId'
  | FinancialSummaryKeySpecifier
)[];
export type FinancialSummaryFieldPolicy = {
  totalBalance?: FieldPolicy<any> | FieldReadFunction<any>;
  totalExpenses?: FieldPolicy<any> | FieldReadFunction<any>;
  totalIncomes?: FieldPolicy<any> | FieldReadFunction<any>;
  totalSavings?: FieldPolicy<any> | FieldReadFunction<any>;
  totalSavingsByCurrentMonth?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type IncomeKeySpecifier = (
  | 'account'
  | 'category'
  | 'id'
  | 'incomeDate'
  | 'isRecurring'
  | 'recurringPeriod'
  | 'transactions'
  | 'user'
  | IncomeKeySpecifier
)[];
export type IncomeFieldPolicy = {
  account?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  incomeDate?: FieldPolicy<any> | FieldReadFunction<any>;
  isRecurring?: FieldPolicy<any> | FieldReadFunction<any>;
  recurringPeriod?: FieldPolicy<any> | FieldReadFunction<any>;
  transactions?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createAccount'
  | 'deleteAccount'
  | 'updateAccount'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  updateAccount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'accounts'
  | 'expenses'
  | 'financialSummary'
  | 'incomes'
  | 'recentTransactions'
  | 'user'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  expenses?: FieldPolicy<any> | FieldReadFunction<any>;
  financialSummary?: FieldPolicy<any> | FieldReadFunction<any>;
  incomes?: FieldPolicy<any> | FieldReadFunction<any>;
  recentTransactions?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TransactionKeySpecifier = (
  | 'amount'
  | 'description'
  | 'id'
  | 'transactable'
  | 'transactionDate'
  | 'user'
  | TransactionKeySpecifier
)[];
export type TransactionFieldPolicy = {
  amount?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  transactable?: FieldPolicy<any> | FieldReadFunction<any>;
  transactionDate?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
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
  Expense?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ExpenseKeySpecifier
      | (() => undefined | ExpenseKeySpecifier);
    fields?: ExpenseFieldPolicy;
  };
  FinancialSummary?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | FinancialSummaryKeySpecifier
      | (() => undefined | FinancialSummaryKeySpecifier);
    fields?: FinancialSummaryFieldPolicy;
  };
  Income?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | IncomeKeySpecifier
      | (() => undefined | IncomeKeySpecifier);
    fields?: IncomeFieldPolicy;
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
