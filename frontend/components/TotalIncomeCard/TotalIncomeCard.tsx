import { Dollar } from 'assets/icons';
import { formatDollars } from 'utils/formatDollars';

import { TotalIncomeCardFinancialSummary as FinancialSummary } from 'components/TotalIncomeCard/__generated__/TotalIncomeCard.gql';
import Card from 'components/base/Card/Card';

type TotalBalanceCardProps = {
  financialSummary: FinancialSummary | undefined | null;
};

const TotalBalanceCard = ({ financialSummary }: TotalBalanceCardProps) => {
  return (
    <Card
      customClasses={{
        color: 'bg-green-200 dark:bg-green-700',
        grid: 'col-span-4 lg:col-span-2 border-2 border-green-50',
      }}>
      <div className="flex items-center justify-between">
        <div className="badge prose-sm bg-green-700 dark:bg-white border-0 text-green-100 dark:text-green-700 font-semibold">
          Total income
        </div>
        <Dollar className="text-green-700 dark:text-white" />
      </div>
      <div className="stat p-0">
        <p className="stat-value prose-2xl text-green-700 dark:text-white">
          {formatDollars(financialSummary?.totalIncomes)}
        </p>
      </div>
    </Card>
  );
};

export default TotalBalanceCard;
