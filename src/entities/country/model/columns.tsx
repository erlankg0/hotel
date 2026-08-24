import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';

import type { CountryType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});


export const columns: Array<ColumnDef<typeof features, CountryType>> = [
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
    header: 'Названия',
    cell: ({ getValue }) => (
      <div className="flex items-center gap-3">
        <div className="flex size-9 rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
          {getValue<string>().toUpperCase()}
        </div>
      </div>
    ),
  },
  {
    header: 'Страны',
    accessorKey: 'shortTitle',
    cell: ({ getValue }) => (
      <div className="flex items-center gap-3">
        <div className="flex size-9 rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
          {getValue<string>().toUpperCase()}
        </div>
      </div>
    ),
  },

  {
    id: 'details',
    header: '',
    cell: ({ row }) => (
      <Link
        href={`/admin/market/${row.original.id}`}
        className="
          inline-flex items-center gap-1.5
          text-xs font-semibold text-indigo-600
          transition-colors
          hover:text-indigo-700
        "
      >
        Подробнее
        <span className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    ),
  },

];
