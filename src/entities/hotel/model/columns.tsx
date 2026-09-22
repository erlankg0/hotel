
import Link from 'next/link';

import type { HotelType } from '../model/types';
import type { ColumnDef } from '@tanstack/react-table';
import { features } from '@/shared/const/table-features'

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
    id: 'actions',
    header: 'Действия',
    cell: ({ row }) => (
      <Link
        href={`hotel/${row.original.id}/detail`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Изменить
        <span aria-hidden="true">→</span>
      </Link>
    ),
  },
];
