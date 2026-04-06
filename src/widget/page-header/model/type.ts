import type { ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  searchValue?: string;
  onSearchOnChange?: (searchValue: string) => void;
  slot?: ReactNode;
}