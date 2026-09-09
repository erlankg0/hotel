import type { ReactNode } from 'react';

export type SelectOption = {
  id: string;
  label: string;
}

export interface Props {
  className?: string;
  empty?: ReactNode;
  value: string[];
  options: SelectOption[];
  onChange: (value: string[])=> void;
  search: string;
  onSearchChange: (value: string)=> void;
  page: number;
  total: number;
  isLoading: boolean;
  onChangePage: (page: number)=> void;
}