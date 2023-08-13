import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from '@nextui-org/react';
import { Loading } from 'components/Loading';
import { Account } from 'graphql/types';
import { startCase, camelCase } from 'lodash';
import { useMemo } from 'react';

type AccountListProps = {
  accounts: Omit<Account, 'createdAt' | 'updatedAt' | 'userId'>[] | undefined
}

export const AccountList = ({ accounts }: AccountListProps) => {
  const columnStructure = useMemo(() => Object.keys(accounts?.[0] || {}).map(key => startCase(key)).splice(2), [accounts]);
  const columns = columnStructure.map(column => <TableColumn key={ column }>{ column }</TableColumn>);

  const rows = useMemo(() => accounts?.map((account) => {
    return (
      <TableRow key={ account?.id }>
        { (columnKey) => <TableCell>{ getKeyValue(account, camelCase(columnKey.toString())) }</TableCell> }
      </TableRow>
    );
  }), [accounts]);

  return (
    <Table aria-label="Account list">
      <TableHeader>
        { columns }
      </TableHeader>
      <TableBody emptyContent="No accounts.">
        { rows || [] }
      </TableBody>
    </Table>
  );
};
