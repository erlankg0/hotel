import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { QueryOptionAgency } from '../model/query-option';

export const useAgenciesQuery = ({ search, id }: { search?: string, id?: string }) => {
  const debouncedSearch = useDebounce<string | undefined>(search, 500);
  const [page, setPage] = useState<number>(1);
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionAgency.get({ title: debouncedSearch, page, id: id }),
  });

  const result = data?.data.data || [];

  return {
    data: result,
    setPage,
    isLoading,
    error,
  };

};