import { tableFeatures } from '@tanstack/react-table';
import Link from 'next/link';

import { ImageUI } from '@/shared/ui/image';

import type { OperatorType } from './types';
import type { ColumnDef } from '@tanstack/react-table';

export const features = tableFeatures({});

export const columns: Array<ColumnDef<typeof features, OperatorType>> = [
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
    accessorKey: 'icon.url',
    header: 'Иконка',
    cell: ({ getValue, row }) => (
      <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 flex items-center justify-center shadow-xs">
        <ImageUI
          src={getValue<string>()}
          alt={row.original.title}
        />
      </div>
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
    id: 'agencies',
    header: 'Агентства',
    cell: ({ row }) => (
      <Link
        href={`/admin/operator/${row.original.id}`}
        className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-lg transition-colors border border-slate-200/60"
      >
        Агентства
      </Link>
    ),
  },
  {
    id: 'detail',
    header: 'Действия',
    cell: ({ row }) => (
      <Link
        href={`/admin/operator/${row.original.id}/detail`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];