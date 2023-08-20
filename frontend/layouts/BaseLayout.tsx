import { Sidebar } from 'components/Sidebar';
import { ReactNode } from 'react';

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        { children }
      </div>
    </>
  );
};

export default BaseLayout;
