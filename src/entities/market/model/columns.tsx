import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';

import type { MarketType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});


export const columns: Array<ColumnDef<typeof features, MarketType>> = [
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
    header: 'Рынок',
    cell: ({ getValue }) => (
      <div className="flex items-center gap-3">
        <div className="flex p-3 w-full rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
          {getValue<string>().toUpperCase()}
        </div>
      </div>
    ),
  },

  {
    id: 'countries',
    header: 'Страны',
    cell: ({ row }) => (
      <Link
        href={`/admin/market/${row.original.id}/countries`}
        className="
          inline-flex items-center gap-1.5 rounded-md
          border border-slate-200 bg-white px-3 py-1.5
          text-xs font-medium text-slate-600
          transition
          hover:border-indigo-200
          hover:bg-indigo-50
          hover:text-indigo-600
        "
      >
        <span>Добавить страну</span>
        <span className="text-sm">+</span>
      </Link>
    ),
  },

  {
    id: 'details',
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`/admin/market/${row.original.id}/detail`}
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
