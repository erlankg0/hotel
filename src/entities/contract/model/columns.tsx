import Link from 'next/link';

import {
  boardTypeLabels,
  currencyLabels,
  contractStatusLabels,
} from '@/shared/const/enums';
import { Checkbox } from '@/shared/ui/checkbox';

import type { ContractType } from '../model/types';
import type { features } from '@/shared/const/table-features';
import type { ColumnDef } from '@tanstack/react-table';

const formatDate = (value: string | Date) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(value));

const formatDateTime = (value: string) =>
  new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));

const statusStyles = {
  DRAFT: 'bg-slate-100 text-slate-600 ring-slate-200',
  ACTIVE: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  SUSPENDED: 'bg-amber-50 text-amber-700 ring-amber-200',
  EXPIRED: 'bg-red-50 text-red-700 ring-red-200',
} as const;

export const columns: Array<ColumnDef<typeof features, ContractType>> = [
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
    header: 'Контракт',
    cell: ({ row }) => (
      <Link
        href={`contracts/${row.original.id}`}
        className="group block max-w-65"
      >
        <span
          className="block truncate text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary">
          {row.original.title}
        </span>

        <span className="mt-0.5 block text-xs text-slate-400">
          ID: {row.original.id}
        </span>
      </Link>
    ),
  },

  {
    accessorKey: 'status',
    header: 'Статус',
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <span
          className={[
            'inline-flex items-center rounded-full px-2.5 py-1',
            'text-xs font-medium ring-1 ring-inset',
            statusStyles[status],
          ].join(' ')}
        >
          <span className="mr-1.5 size-1.5 rounded-full bg-current" />

          {contractStatusLabels[status]}
        </span>
      );
    },
  },

  {
    accessorKey: 'boardType',
    header: 'Питание',
    cell: ({ row }) => (
      <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
        {boardTypeLabels[row.original.boardType]}
      </span>
    ),
  },

  {
    accessorKey: 'currency',
    header: 'Валюта',
    cell: ({ row }) => (
      <span className="font-mono text-xs font-semibold text-slate-600">
        {currencyLabels[row.original.currency]}
      </span>
    ),
  },

  {
    accessorKey: 'isMaleControl',
    header: 'Мужчины',
    cell: ({ row }) => {
      const allowed = row.original.isMaleControl;

      return (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={allowed}
            disabled
            aria-label={
              allowed
                ? 'Размещение мужчин разрешено'
                : 'Размещение мужчин запрещено'
            }
          />

          <span
            className={
              allowed
                ? 'text-xs font-medium text-emerald-600'
                : 'text-xs text-slate-400'
            }
          >
            {allowed ? 'Разрешено' : 'Нет'}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'checkIn',
    header: 'Проживание',
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        <div className="text-xs font-medium text-slate-700">
          {formatDate(row.original.checkIn)}
        </div>

        <div className="mt-0.5 text-[11px] text-slate-400">
          до {formatDate(row.original.checkOut)}
        </div>
      </div>
    ),
  },

  {
    accessorKey: 'salesStart',
    header: 'Продажи',
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        <div className="text-xs font-medium text-slate-700">
          {formatDate(row.original.salesStart)}
        </div>

        <div className="mt-0.5 text-[11px] text-slate-400">
          до {formatDate(row.original.salesEnd)}
        </div>
      </div>
    ),
  },

  {
    accessorKey: 'createdAt',
    header: 'Создан',
    cell: ({ getValue }) => (
      <span className="whitespace-nowrap text-xs tabular-nums text-slate-500">
        {formatDateTime(getValue<string>())}
      </span>
    ),
  },

  {
    accessorKey: 'updatedAt',
    header: 'Обновлён',
    cell: ({ getValue }) => (
      <span className="whitespace-nowrap text-xs tabular-nums text-slate-500">
        {formatDateTime(getValue<string>())}
      </span>
    ),
  },
];