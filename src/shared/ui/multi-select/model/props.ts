import type { ReactNode } from 'react';

export type SelectOption = {
  id: string;
  title: string;
}

export interface Props {
  className?: string;
  empty?: ReactNode;
  value: SelectOption[];
  options: SelectOption[];
  onChange: (value: SelectOption[])=> void;
  search: string;
  onSearchChange: (value: string)=> void;
  page: number;
  total: number;
  isLoading: boolean;
  onChangePage: (page: number)=> void;
  invalid?: boolean;
}