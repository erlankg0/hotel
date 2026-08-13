import type { features } from '../hook/useTable';
import type { ColumnDef, RowData } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export type DataTableProps<TData extends RowData> = {
  data: TData[];
  columns: ColumnDef<typeof features, TData>[];
  isLoading?: boolean;
  caption?: string;
  children?: ReactNode
};