import type {
  ColumnDef,
  TableFeatures,
} from '@tanstack/react-table';

export type DataTableProps<
  TData extends TableFeatures,
  TFeatures extends TableFeatures,
> = {
  data: TData[];
  columns: ColumnDef<TData, TFeatures>[];
  features?: TFeatures;
  caption?: string;
  isLoading?: boolean;
};