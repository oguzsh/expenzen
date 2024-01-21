import { Wallet } from 'assets/icons';
import { formatDollars } from 'utils/formatDollars';

import { TotalBalanceCardFinancialSummary as FinancialSummary } from 'components/TotalBalanceCard/__generated__/TotalBalanceCard.gql';
import Card from 'components/base/Card/Card';

type TotalBalanceCardProps = {
  financialSummary: FinancialSummary | null | undefined;
};

const TotalBalanceCard = ({ financialSummary }: TotalBalanceCardProps) => {
  return (
    <Card
      customClasses={{
        color: 'bg-zinc-100 dark:bg-zinc-700',
        grid: 'col-span-4 md:col-span-4 lg:col-span-1',
      }}>
      <div className="flex items-center justify-between">
        <div className="badge prose-sm bg-slate-700 dark:bg-white border-0 text-slate-100 dark:text-slate-700 font-semibold">
          Total balance
        </div>
        <Wallet className="text-slate-700 dark:text-slate-200" />
      </div>
      <div className="stat p-0">
        <p className="stat-value prose-2xl text-slate-700 dark:text-white">
          {formatDollars(financialSummary?.totalBalance)}
        </p>
        <span className="stat-desc prose-sm text-wrap text-gray-600  dark:text-gray-300">
          You save as much as{' '}
          {formatDollars(financialSummary?.totalSavingsByCurrentMonth)} this
          month!
        </span>
      </div>
    </Card>
  );
};

export default TotalBalanceCard;
