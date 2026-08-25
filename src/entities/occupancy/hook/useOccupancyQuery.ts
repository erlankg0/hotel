import { useQuery } from '@tanstack/react-query';

import { QueryOptionOccupancy } from '../model/query-option';

export const useOccupancyQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionOccupancy.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};