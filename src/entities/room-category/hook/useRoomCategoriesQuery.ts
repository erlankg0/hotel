'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useDebounce } from '@/shared/lib/useDebounce';

import { QueryOptionRoomCategory } from '../model/query-option';

export const useRoomCategoriesQuery = (search?: string) => {
  const debouncedSearch = useDebounce<string | undefined>(search, 500);
  const [page, setPage] = useState<number>(1);

  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionRoomCategory.get({ title: debouncedSearch, page }),
  });

  const result = data?.data.data;

  return {
    data: result,
    total: data?.data.total || 0,
    limit: data?.data.limit || 10,
    page: data?.data.page ?? page,
    setPage,
    isLoading,
    error,
  };
};