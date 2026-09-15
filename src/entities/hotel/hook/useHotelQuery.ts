import { useQuery } from '@tanstack/react-query';

import { QueryOptionHotel } from '../model/query-option';

export const useHotelQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionHotel.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};