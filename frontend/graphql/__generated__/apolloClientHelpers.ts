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
export type MutationKeySpecifier = ('testField' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  testField?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ('accounts' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Account?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AccountKeySpecifier
      | (() => undefined | AccountKeySpecifier);
    fields?: AccountFieldPolicy;
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
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
