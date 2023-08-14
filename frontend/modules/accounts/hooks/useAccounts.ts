import { useAllAccounts } from '../queries/__generated__/index.gql';

export const useAccounts = () => {
  const { data, loading, error } = useAllAccounts();

  const accounts = data?.accounts;

  return { accounts, loading, error };
};
