import Link from 'next/link';

import type { ContractPeriodType } from '../model/types';
import type { features } from '@/shared/const/table-features';
import type { ColumnDef } from '@tanstack/react-table';

const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const formatDate = (value: Date | string) => dateFormatter.format(new Date(value));
const formatDateTime = (value: Date | string) =>
  dateTimeFormatter.format(new Date(value));

export const columns: Array<ColumnDef<typeof features, ContractPeriodType>> = [
  {
    id: 'number',
    header: '#',
    cell: ({ row }) => (
      <span className="font-mono text-xs tabular-nums text-slate-400">
        {String(row.index + 1).padStart(2, '0')}
      </span>
    ),
  },
  {
    accessorKey: 'title',
    header: 'Период',
    cell: ({ row }) => (
      <Link
        href={`${row.original.id}`}
        className="group flex max-w-72 flex-col gap-1"
      >
        <span className="truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary">
          {row.original.title}
        </span>
      </Link>
    ),
  },
  {
    id: 'stayPeriod',
    accessorFn: (row) => row.startDate,
    header: 'Период проживания',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm tabular-nums text-slate-600">
        <span>{formatDate(row.original.startDate)}</span>
        <span aria-hidden="true" className="text-slate-300">—</span>
        <span>{formatDate(row.original.endDate)}</span>
      </div>
    ),
  },
  {
    id: 'nights',
    accessorFn: (row) => {
      const start = new Date(row.startDate);
      const end = new Date(row.endDate);

      return Math.round(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
      );
    },
    header: 'Количество ночей',
    cell: ({ row }) => {
      const nights = row.getValue<number>('nights');

      return (
        <div className="flex flex-col gap-1 text-sm tabular-nums">
          <span className="font-medium text-slate-900">
            {nights} {nights === 1 ? 'ночь' : nights >= 2 && nights <= 4 ? 'ночи' : 'ночей'}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Создан',
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-xs tabular-nums text-slate-500">
        {formatDateTime(row.original.createdAt)}
      </span>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Обновлён',
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-xs tabular-nums text-slate-500">
        {formatDateTime(row.original.updatedAt)}
      </span>
    ),
  },
];
