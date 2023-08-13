import { useAllAccountsQuery } from '../queries/__generated__/index.generated';

export const useAccounts = () => {
  const { data, loading, error } = useAllAccountsQuery();

  const accounts = data?.accounts;

  return { accounts, loading, error };
};
