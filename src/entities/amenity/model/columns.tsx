import {
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSortingFeature, sortFn_alphanumeric,
  tableFeatures,
} from '@tanstack/react-table';
import Link from 'next/link';


import type { AmenityType } from './types';
import type { ColumnDef } from '@tanstack/react-table';
import { AMENITY_ICONS } from '@/shared/const/icon_amenities';

export const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});

export const columns: Array<ColumnDef<typeof features, AmenityType>> = [
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
    accessorKey: 'icon',
    header: 'Иконка',
    cell: ({ row }) => {
      const Icon = AMENITY_ICONS[row.original.icon];
      return (
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 shadow-xs">
          <Icon className="size-5" />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: 'Название',
    cell: ({ getValue }) => (
      <span className="font-medium text-slate-800 text-sm">
        {getValue<string>()}

      </span>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Подробнее',
    cell: ({ row }) => (
      <Link
        href={`amenity/${row.original.id}`}
        className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
      >
        Подробнее
        <span aria-hidden="true">&rarr;</span>
      </Link>
    ),
  },
];