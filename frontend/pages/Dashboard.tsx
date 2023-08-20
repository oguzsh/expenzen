import { Card } from 'components/Card';
import { AccountsContainer } from 'modules/accounts/AccountsContainer';
import BaseLayout from '../layouts/BaseLayout';

const Dashboard = () => {
  return (
    <BaseLayout>
      <div className="p-4">
        <div className="flex flex-wrap justify-evenly gap-4 h-full">
          <div className="flex flex-col items-center h-full">
            <AccountsContainer />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
