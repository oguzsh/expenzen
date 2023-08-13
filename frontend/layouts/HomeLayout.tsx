import { Card } from 'components/Card';
import { Sidebar } from 'components/Sidebar';

const HomeLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          <div className="flex flex-wrap justify-evenly gap-4 h-full">
            <div className="flex flex-col items-center h-full">
              <Card className="mb-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Income</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">$38,534.90</p>
              </Card>
              <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Expenses</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">$38,534.90</p>
              </Card>
            </div>
            <div className="flex flex-col items-center h-full">
              <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Statistics Transtaction</h5>
              </Card>
            </div>
            <div className="flex flex-col items-center h-full">
              <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total balance</h5>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
