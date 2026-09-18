import Link from 'next/link';

import type { ContractType } from '../model/types';
import type { features } from '@/shared/const/table-features';
import type { ColumnDef } from '@tanstack/react-table';


export const columns: Array<ColumnDef<typeof features, ContractType>> = [
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
    cell: ({ row }) => (
      <span className="font-medium text-slate-800 text-sm">
        {row.original.title}
      </span>
    ),
  },

  {
    accessorKey: 'id',
    header: 'Контракты',
    cell: ({ row }) => (
      <Link
        href={`contracts?=agency${row.original.id}`}
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
];

