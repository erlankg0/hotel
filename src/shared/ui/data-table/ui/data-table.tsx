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
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <Table>
        {isLoading ? (
          <DataTableSkeleton columns={columns} />
        ) : (
          <>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-slate-100 bg-slate-50/70 hover:bg-slate-50/70"
                >
                  {headerGroup.headers.map((header) => {
                    const sorted = header.column.getIsSorted();

                    return (
                      <TableHead
                        key={header.id}
                        className="h-11  text-xs font-medium uppercase tracking-wider text-slate-500"
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className={
                              header.column.getCanSort()
                                ? 'flex cursor-pointer select-none items-center gap-1.5 hover:text-slate-700'
                                : 'flex items-center gap-1.5'
                            }
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {sorted === 'asc' && (
                              <span className="text-slate-400">↑</span>
                            )}
                            {sorted === 'desc' && (
                              <span className="text-slate-400">↓</span>
                            )}
                          </div>
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-32 text-center text-sm text-slate-500"
                  >
                    Нет данных
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-b border-slate-50 transition-colors hover:bg-slate-50/60"
                  >
                    {row.getAllCells().map((cell) => (
                      <TableCell key={cell.id} className="px-4 py-3.5">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>

            {children && (
              <TableFooter className="border-t border-slate-100 bg-slate-50/50">
                {children}
              </TableFooter>
            )}

            {caption && (
              <TableCaption className="mt-3 text-xs text-slate-400">
                {caption}
              </TableCaption>
            )}
          </>
        )}
      </Table>
    </div>
  );
}