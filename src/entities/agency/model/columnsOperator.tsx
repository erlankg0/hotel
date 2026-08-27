import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';

import type { AgencyType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});

export const columnsOperator: Array<ColumnDef<typeof features, AgencyType>> = [
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
    accessorKey: 'shortTitle',
    header: 'Код',
    cell: ({ getValue }) => (
      <span className="font-medium text-slate-800 text-sm">
        {getValue<string>() ? getValue<string>() : 'N/A'}
      </span>
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
    accessorKey: 'updatedAt',
    header: 'Дата обновления',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
      {new Intl.DateTimeFormat('ru-RU').format(
        new Date(getValue<string>()),
      )}
    </span>
    ),

  },
  {
    accessorKey: 'id',
    header: 'Контракты',
    cell: ({ row }) => (
      <Link
        href={`/admin/operator/${row.original.id}/agencies/${row.original.id}`}
        className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-200/60"
      >
        Контракты
      </Link>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`agencies/${row.original.id}`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];


export const columns: Array<ColumnDef<typeof features, AgencyType>> = [
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
    accessorKey: 'shortTitle',
    header: 'Код',
    cell: ({ getValue }) => (
      <span className="font-medium text-slate-800 text-sm">
        {getValue<string>() ? getValue<string>() : 'N/A'}
      </span>
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
    accessorKey: 'updatedAt',
    header: 'Дата обновления',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
      {new Intl.DateTimeFormat('ru-RU').format(
        new Date(getValue<string>()),
      )}
    </span>
    ),

  },
  {
    accessorKey: 'operator.title',
    header: 'Оператор',
    cell: ({ row }) => (
      <Link
        href={`/admin/operator/${row.original.operator.id}`}
        className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-200/60"
      >
        {row.original.operator.title}
      </Link>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`agencies/${row.original.id}`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];