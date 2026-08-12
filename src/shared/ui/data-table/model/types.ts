import type { ColumnDef, RowData, TableFeatures, TableOptions } from '@tanstack/react-table';


export type DataTableProps<
  TFeatures extends TableFeatures,
  TData extends RowData,
> = {
  data: TData[];
  columns: TableOptions<TFeatures, TData>['columns'];
  features: TableOptions<TFeatures, TData>['features'];
  isLoading?: boolean;
  caption?: string;
};