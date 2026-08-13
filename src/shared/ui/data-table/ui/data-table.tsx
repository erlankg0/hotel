import { flexRender } from '@tanstack/react-table';


import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
  TableFooter,
  TableCaption,
} from '@/shared/ui/table';

import { useAppTable } from '../hook/useTable';

import { DataTableSkeleton } from './data-table-skeleton';

import type { DataTableProps } from '../model/types';
import type { RowData } from '@tanstack/react-table';

export function DataTable<TData extends RowData>({
                                                   data,
                                                   columns,
                                                   isLoading = false,
                                                   children,
                                                   caption,
                                                 }: DataTableProps<TData>) {
  const table = useAppTable({
    columns,
    data,
  });


  return (
    <Table>
      {isLoading ? (
        <DataTableSkeleton columns={columns} />
      ) : (
        <>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {children && (
            <TableFooter>
              {children}
            </TableFooter>
          )}
          {caption && (
            <TableCaption>
              {caption}
            </TableCaption>
          )}
        </>
      )}

    </Table>
  );
}