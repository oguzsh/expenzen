import { BaseLayoutUserData as User } from 'layouts/__generated__/BaseLayout.gql';

import { ReactNode } from 'react';

import { Header } from 'components/Header/header';

type BaseLayoutProps = {
  user: User | undefined;
  children: ReactNode;
};

const BaseLayout = ({ user }: BaseLayoutProps) => {
  return (
    <main className="page_wrapper w-full h-svh p-6 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 grid-rows-4 gap-y-4 gap-x-4 max-w-7xl">
      <Header user={user} />
      <div className="card flex justify-center items-center bg-zinc-100 dark:bg-zinc-700 rounded-xl col-span-4 md:col-span-4 lg:col-span-1 border-2 dark:border-none">
        <div className="card-body w-full p-4 justify-between">
          <div className="flex items-center justify-between">
            <div className="badge prose-sm bg-slate-700 dark:bg-white border-0 text-slate-100 dark:text-slate-700 font-semibold">
              Total balance
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-slate-700 dark:text-slate-200">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <div className="stat p-0">
            <p className="stat-value prose-2xl text-slate-700 dark:text-white">
              $25.6k
            </p>
            <span className="stat-desc prose-sm text-wrap text-gray-600  dark:text-gray-300">
              You save as much as $200 this month!
            </span>
          </div>
        </div>
      </div>

      <div className="card flex justify-center items-center bg-green-200 dark:bg-green-700 rounded-xl col-span-4 lg:col-span-2 border-2 border-green-50 dark:border-none">
        <div className="card-body w-full p-4 justify-between">
          <span className="badge bg-green-700 dark:bg-white font-semibold text-green-100 dark:text-green-700 border-0">
            Total income
          </span>
          <div className="stat p-0">
            <div className="stat-figure text-green-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="stat-value prose-2xl text-green-700 dark:text-white">
              $38,534.90
            </p>
          </div>
        </div>
      </div>

      <div className="card flex justify-center items-center bg-violet-100  dark:bg-violet-800 rounded-xl col-span-4 lg:col-span-2 border-2 dark:border-none border-violet-50">
        <div className="card-body w-full p-4 justify-evenly">
          <span className="badge border-0 bg-violet-800 dark:bg-white text-violet-100 dark:text-violet-800 font-semibold">
            Total expense
          </span>
          <div className="stat p-0">
            <div className="stat-figure text-violet-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="stat-value prose-2xl text-violet-800 dark:text-white">
              $25,123.90
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg col-span-4 border-2 dark:border-none">
        <div className="w-full relative overflow-x-auto rounded-lg">
          <table className="table table-pin-rows bg-white">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Recent transactions
            </caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700 dark:text-slate-100 text-slate-700">
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg col-span-4 border-2 dark:border-none">
        <div className="w-full relative overflow-x-auto rounded-lg">
          <table className="table table-pin-rows bg-white">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Statistics
            </caption>
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700 dark:text-slate-100 text-slate-700">
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr className="bg-white dark:bg-slate-700 dark:text-slate-100 text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
