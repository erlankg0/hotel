import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { QueryOptionContract } from '../model/query-option';

export const useContractsQuery = ({ search, id }: { search?: string, id?: string }) => {
  const debouncedSearch = useDebounce<string | undefined>(search, 500);
  const [page, setPage] = useState<number>(1);
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionContract.get({ title: debouncedSearch, page, id: id }),
  });

  const result = data?.data.data || [];

  return {
    data: result,
    setPage,
    isLoading,
    error,
    page,
    total: data?.data.total,
    limit: data?.data.limit
  };

};