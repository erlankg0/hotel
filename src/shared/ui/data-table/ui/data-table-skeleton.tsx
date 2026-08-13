import { Skeleton } from '@/shared/ui/skeleton';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table';

import type { DataTableProps } from '../model/types';
import type { RowData } from '@tanstack/react-table';


const SKELETON_ROWS = 8;

export function DataTableSkeleton<TData extends RowData>({
                                                    columns,
                                                  }: {
  columns: DataTableProps<TData>['columns'];
}) {
  return (
    <>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={column.id ?? `skeleton-header-${index}`}>
              <Skeleton className="h-4 w-24" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
          <TableRow key={`skeleton-row-${rowIndex}`}>
            {columns.map((column, columnIndex) => (
              <TableCell
                key={`skeleton-cell-${rowIndex}-${columnIndex}`}
              >
                <Skeleton className="h-5 w-full max-w-45" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}