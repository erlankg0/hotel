import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { QueryOptionRequest } from '../model/query-option';

export const useRequest = (search?: string) => {
  const debouncedSearch = useDebounce<string | undefined>(search, 500);
  const [page, setPage] = useState<number>(1);

  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionRequest.get({ name: debouncedSearch, page }),
  });

  const result = data?.data.data

  return {
    data: result,
    setPage,
    isLoading,
    error,
  };

};