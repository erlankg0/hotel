import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';

import type { OccupancyType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});


export const columns: Array<ColumnDef<typeof features, OccupancyType>> = [
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
    accessorKey: 'adults',
    header: 'Взрослые',
    cell: ({ getValue }) => (
      <p className="font-medium text-slate-800 text-sm">
        {getValue<number>()}
      </p>
    ),
  },
  {
    accessorKey: 'children',
    header: 'Дети',
    cell: ({ getValue }) => (
      <p className="font-medium text-slate-800 text-sm ">
        {getValue<number>()}
      </p>
    ),
  },
  {
    accessorKey: 'babies',
    header: 'Малыш',
    cell: ({ getValue }) => (
      <p className="font-medium text-slate-800 text-sm">
        {getValue<number>()}
      </p>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата создания',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
        {new Intl.DateTimeFormat('ru-RU').format(
          new Date(getValue<string>()),
        )}
      </span>
    ),
  },
  {
    id: 'multiplier',
    header: 'Коэффициент',
    cell: ({ row }) => {
      const rule = row.original.rule;

      if (rule) {
        return (
          <span
            className="inline-flex rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-semibold tabular-nums text-indigo-700 text-center">
          ×{rule.multiplier}
        </span>
        );
      }

      return (
        <Link
          href={`/admin/occupancy/${row.original.id}/rule`}
          className="text-xs font-medium text-muted-foreground hover:text-indigo-600 hover:underline"
        >
          + Добавить
        </Link>
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`/admin/occupancy/${row.original.id}/detail`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];