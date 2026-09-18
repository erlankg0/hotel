import Link from 'next/link';

import type { ContractType } from '../model/types';
import type { features } from '@/shared/const/table-features';
import type { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/shared/ui/checkbox';
import { agencyTypeLabels, boardTypeLabels, currencyLabels, contractStatusLabels } from '@/shared/const/enums'

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
      <Link
        href={`/contracts/${row.original.id}`}
        className="block max-w-[220px] truncate text-sm font-medium text-slate-800 hover:text-primary"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: ({ row }) => (
      <span className="font-medium text-slate-800 text-sm">
        {contractStatusLabels[row.original.status]}
      </span>
    ),
  },
  {
    accessorKey: 'boardType',
    header: 'Тип типания',
    cell: ({ row }) => (
      <span className="font-medium text-slate-800 text-sm">
        {boardTypeLabels[row.original.boardType]}
      </span>
    ),
  },
  {
    accessorKey: 'agencyType',
    header: 'Тип Агенства',
    cell: ({ row }) => (
      <span className="font-medium text-slate-800 text-sm">
        {agencyTypeLabels[row.original.agencyType]}
      </span>
    ),
  },
  {
    accessorKey: 'currency',
    header: 'Валюта',
    cell: ({ row }) => (
      <span className="font-medium text-slate-800 text-sm">
        {currencyLabels[row.original.currency]}
      </span>
    ),
  },
  {
    accessorKey: 'isMaleControl',
    header: 'Мужчины',
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.original.isMaleControl}
          disabled
          aria-label={
            row.original.isMaleControl
              ? 'Размещение мужчин разрешено'
              : 'Размещение мужчин запрещено'
          }
        />
      </div>
    ),
  },
  {
    accessorKey: 'checkIn',
    header: 'Начало проживания',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
        {new Intl.DateTimeFormat('ru-RU').format(
          new Date(getValue<string>()),
        )}
      </span>
    ),
  },
  {
    accessorKey: 'checkOut',
    header: 'Конец проживания',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
        {new Intl.DateTimeFormat('ru-RU').format(
          new Date(getValue<string>()),
        )}
      </span>
    ),

  },

  {
    accessorKey: 'salesStart',
    header: 'Начало продаж',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
        {new Intl.DateTimeFormat('ru-RU').format(
          new Date(getValue<string>()),
        )}
      </span>
    ),
  },
  {
    accessorKey: 'salesEnd',
    header: 'Конец продаж',
    cell: ({ getValue }) => (
      <span className="text-sm text-slate-500">
        {new Intl.DateTimeFormat('ru-RU').format(
          new Date(getValue<string>()),
        )}
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
];

