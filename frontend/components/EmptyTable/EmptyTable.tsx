import { useMemo } from 'react';
import { startCase } from 'lodash';
import { Table, TableHeader, TableColumn, TableBody } from '@nextui-org/react';
import { CreateAccountModal } from 'modules/accounts/components/modals/CreateAccountModal';

export const EmptyTable = ({ name }: { name: string }) => {
  const emptyContent = useMemo(() => {
    return (<>
      <div className='mb-5'>No { name } to display.</div>
      <CreateAccountModal />
    </>);
  }, [name]);

  return (
    <Table aria-label="Empty table">
      <TableHeader>
        <TableColumn>{ startCase(name) }</TableColumn>
      </TableHeader>
      <TableBody emptyContent={ emptyContent }>{ [] }</TableBody>
    </Table>
  );
};
