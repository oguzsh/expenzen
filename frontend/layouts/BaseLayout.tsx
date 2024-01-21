import { BaseLayoutUserData as User } from 'layouts/__generated__/BaseLayout.gql';

import { PropsWithChildren } from 'react';

import { Header } from 'components/base/Header/header';

type BaseLayoutProps = PropsWithChildren<{
  user: User | undefined;
}>;

const BaseLayout = ({ user, children }: BaseLayoutProps) => {
  return (
    <main className="page_wrapper w-full h-svh p-6 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 grid-rows-4 gap-y-4 gap-x-4 max-w-7xl">
      <Header user={user} />
      {children}
    </main>
  );
};

export default BaseLayout;
