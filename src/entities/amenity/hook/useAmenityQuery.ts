import { useQuery } from '@tanstack/react-query';

import { QueryOptionAmenity } from '../model/query-option';

export const useAmenityQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionAmenity.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};