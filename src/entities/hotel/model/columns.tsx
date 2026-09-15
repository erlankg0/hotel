import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';

import type { HotelType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});

export const columns: Array<ColumnDef<typeof features, HotelType>> = [
  {
    id: 'number',
    header: '№',
    cell: ({ row }) => (
      <span className="font-mono text-xs text-slate-400">
        {row.index + 1}
      </span>
    ),
  },
  {
    accessorKey: 'title',
    header: 'Название',
    cell: ({ getValue }) => (
      <span className="font-medium text-slate-800 text-sm">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Операторы',
    cell: ({ row }) => (
      <Link
        href={`hotel/${row.original.id}/operator`}
        className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-200/60"
      >
        Операторы
      </Link>
    ),
  },
  {
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`hotel/${row.original.id}/detail`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];
