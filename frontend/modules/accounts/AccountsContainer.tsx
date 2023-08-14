import { AccountList } from './AccountList';
import { Loading } from 'components/Loading';
import { useAccounts } from './hooks/useAccounts';

export const AccountsContainer = () => {
  const { accounts, loading, error } = useAccounts();

  if (loading) return <Loading />;
  if (error) {
    // TODO: Use ErrorBoundary
    throw error;
  }

  return <AccountList accounts={ accounts } />;
};
