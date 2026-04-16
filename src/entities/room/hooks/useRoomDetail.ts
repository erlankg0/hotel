'use client';

import { useQuery } from '@tanstack/react-query';

import { QueryOptionsRooms } from '../model/query-options';

export const useDetailRoom = (id: string) => {

  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionsRooms.getById(id),
  });

  const result = data?.data;

  return {
    data: result,
    isLoading,
    error,
  };

};