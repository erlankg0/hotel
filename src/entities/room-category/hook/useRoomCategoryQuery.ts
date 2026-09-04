'use client';

import { useQuery } from '@tanstack/react-query';

import { QueryOptionRoomCategory } from '../model/query-option';

export const useRoomCategoryQuery = (id: string) => {

  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionRoomCategory.getById(id),
  });

  const result = data?.data;

  return {
    data: result,
    isLoading,
    error,
  };

};