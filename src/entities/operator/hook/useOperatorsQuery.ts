import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { QueryOptionOperator } from '../model/query-option';

export const useOperatorsQuery = (search?: string) => {
  const debouncedSearch = useDebounce<string | undefined>(search, 500);
  const [page, setPage] = useState<number>(1);

  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionOperator.get({ title: debouncedSearch, page }),
  });

  const result = data?.data.data || [];

  return {
    data: result,
    setPage,
    isLoading,
    error,
    page,
    total: data?.data.total || 0,
    limit: data?.data.limit || 10,
  };

};