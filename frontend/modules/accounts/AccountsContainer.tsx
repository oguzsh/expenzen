import { AccountList } from './AccountList';
import { Loading } from 'components/Loading';
import { useAccounts } from './hooks/useAccounts';
import { EmptyTable } from 'components/EmptyTable';

export const AccountsContainer = () => {
  const { accounts, loading, error } = useAccounts();

  if (loading) return <Loading />;
  if (error) {
    // TODO: Use ErrorBoundary
    throw error;
  }

  if (!accounts?.length) {
    return <EmptyTable name='accounts' />;
  }

  // TODO: Do not use .slice and integrate GQL Pagination
  return <>
    <AccountList accounts={ accounts.slice(0, 10) } />
  </>;
};
