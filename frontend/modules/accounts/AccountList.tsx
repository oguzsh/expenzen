import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from '@nextui-org/react';
import { Account } from 'graphql/__generated__/types';
import { startCase, camelCase } from 'lodash';
import { useMemo } from 'react';
import { CreateAccountModal } from './components/modals/CreateAccountModal';

type AccountListProps = {
  accounts: Omit<Account, 'createdAt' | 'updatedAt' | 'userId'>[] | undefined
}

export const AccountList = ({ accounts }: AccountListProps) => {
  const columnStructure = useMemo(() => Object.keys(accounts?.[0] || {}).map(key => startCase(key)).splice(2), [accounts]);
  const columns = columnStructure.map(column => <TableColumn key={ column }>{ column }</TableColumn>);

  const bottomContent = useMemo(() => {
    return <CreateAccountModal />;
  }, []);


  const rows = useMemo(() => accounts?.map((account) => {
    return (
      <TableRow key={ account?.id }>
        { (columnKey) => <TableCell>{ getKeyValue(account, camelCase(columnKey.toString())) }</TableCell> }
      </TableRow>
    );
  }), [accounts]);

  return (
    <Table aria-label="Account list"
      bottomContent={ bottomContent }
      bottomContentPlacement="inside"
    >
      <TableHeader>
        { columns }
      </TableHeader>
      <TableBody emptyContent="No accounts.">
        { rows || [] }
      </TableBody>
    </Table>
  );
};
