import type { RoomCategortType } from '../model/types';
import type { features } from '@/shared/const/table-features'
import type { ColumnDef } from '@tanstack/react-table';

export const columns: Array<ColumnDef<typeof features, RoomCategortType>> = [
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
    header: 'Названия',
    cell: ({ getValue }) => (
      <div className="flex items-center gap-3">
        <div className="flex p-3 w-full rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
          {getValue<string>().toUpperCase()}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'shortTitle',
    header: 'Названия',
    cell: ({ getValue }) => (
      <div className="flex items-center gap-3">
        <div className="flex p-3 w-full rounded-lg bg-indigo-50 text-sm font-semibold text-indigo-600">
          {getValue<string>().toUpperCase()}
        </div>
      </div>
    ),
  },


];
