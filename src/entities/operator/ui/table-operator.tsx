import { useTable } from '@tanstack/react-table';
import { Loader } from 'lucide-react';

import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow, TableCaption } from '@/shared/ui/table';

import { useOperator } from '../hook/useOperatorsQuery';
import { features, columns } from '../model/columns';

export function TableOperator() {
  const { data, isLoading } = useOperator();
  const table = useTable({
    key: 'operator-table',
    features,
    columns,
    data,
  });

  if (isLoading) {
    return (
      <div>
        {isLoading && (
          <Loader className="animate-spin" size={16} />
        )}
        {!isLoading && (!data || data.length === 0) && (
          <div className="py-12 text-center text-muted-foreground">
            Нет данных
          </div>
        )}
      </div>
    );
  }


  return (
    <Table>
      <TableCaption>Операторы</TableCaption>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null : (
                  <table.FlexRender header={header} />
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                <table.FlexRender cell={cell} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}