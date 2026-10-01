import type { features } from '@/shared/const/table-features';


import Link from 'next/link';
import { MoreHorizontal } from 'lucide-react';
import type { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/shared/ui/button';
import { Switch } from '@/shared/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

import type { ContractRoomType } from '../model/types';

interface ColumnProps {
  onToggleActive: (id: string) => void;
}

export const columns = ({ onToggleActive }: ColumnProps) => {

  const column: Array<ColumnDef<typeof features, ContractRoomType>> = [
    {
      id: 'number',
      header: '#',
      cell: ({ row }) => (
        <span className="font-mono text-xs text-muted-foreground">
          {String(row.index + 1).padStart(2, '0')}
        </span>
      ),
    },

    {
      id: 'roomCategory',
      accessorKey: 'roomCategory.title',
      header: 'Категория номера',
      cell: ({ row }) => {
        const { roomCategory } = row.original;

        return (
          <Link
            href={`/contracts/${row.original.id}`}
            className="group flex min-w-0 flex-col"
          >
            <span className="truncate font-medium text-foreground group-hover:text-primary">
              {roomCategory.title}
            </span>

            <span className="text-xs text-muted-foreground">
              {roomCategory.shortTitle}
            </span>
          </Link>
        );
      },
    },

    {
      id: 'status',
      accessorKey: 'isActive',
      header: 'Статус',
      cell: ({ row }) => {
        const isActive = row.original.isActive;

        return (
          <div className="flex items-center gap-2">
            <span
              className={[
                'h-2 w-2 rounded-full',
                isActive ? 'bg-emerald-500' : 'bg-slate-300',
              ].join(' ')}
            />

            <span
              className={
                isActive
                  ? 'text-sm text-emerald-700'
                  : 'text-sm text-muted-foreground'
              }
            >
              {isActive ? 'Активен' : 'Неактивен'}
            </span>
          </div>
        );
      },
    },

    {
      id: 'toggle',
      header: '',
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Switch
            checked={row.original.isActive}
            onCheckedChange={(checked) => {
              onToggleActive(row.original.id)
            }}
            aria-label={
              row.original.isActive
                ? 'Деактивировать категорию'
                : 'Активировать категорию'
            }
          />
        </div>
      ),
    },

    {
      id: 'actions',
      header: '',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuItem className="text-destructive focus:text-destructive">
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return column
}
