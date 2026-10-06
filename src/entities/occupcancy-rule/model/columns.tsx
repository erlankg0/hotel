import type { OccupancyRuleType } from '../model/types';
import type { features } from '@/shared/const/table-features';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<typeof features, OccupancyRuleType>> = [
  {
    id: 'number',
    header: '№',
    cell: ({ row }) => (
      <span className="font-mono text-xs text-slate-400 tabular-nums">
        {String(row.index + 1).padStart(2, '0')}
      </span>
    ),
  },
  {
    accessorKey: 'title',
    header: 'Название',
    cell: ({ row }) => (
      <span className="font-medium text-slate-900 text-sm leading-tight">
        {row.original.occupancy.title}
      </span>
    ),
  },
  {
    accessorKey: 'adults',
    header: 'Взрослые',
    cell: ({ row }) => (
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-slate-100 px-1.5 text-xs font-semibold text-slate-700 tabular-nums">
        {row.original.occupancy.adults}
      </span>
    ),
  },
  {
    accessorKey: 'children',
    header: 'Дети',
    cell: ({ row }) => (
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-slate-100 px-1.5 text-xs font-semibold text-slate-700 tabular-nums">
        {row.original.occupancy.children}
      </span>
    ),
  },
  {
    accessorKey: 'babies',
    header: 'Малыши',
    cell: ({ row }) => (
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-slate-100 px-1.5 text-xs font-semibold text-slate-700 tabular-nums">
        {row.original.occupancy.babies}
      </span>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Дата создания',
    cell: ({ getValue }) => {
      const date = new Date(getValue<string>());
      return (
        <div className="flex flex-col">
          <span className="text-sm text-slate-700 tabular-nums">
            {new Intl.DateTimeFormat('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }).format(date)}
          </span>
          <span className="text-xs text-slate-400 tabular-nums">
            {new Intl.DateTimeFormat('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            }).format(date)}
          </span>
        </div>
      );
    },
  },
  {
    id: 'multiplier',
    header: 'Коэффициент',
    cell: ({ row }) => (
      <span className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold tabular-nums text-indigo-700 ring-1 ring-inset ring-indigo-600/10">
        ×{row.original.multiplier}
      </span>
    ),
  },
];