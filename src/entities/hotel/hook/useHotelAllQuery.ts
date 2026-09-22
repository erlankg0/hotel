import { useQuery } from '@tanstack/react-query';

import { QueryOptionHotel } from '../model/query-option';

export const useHotelAllQuery = () => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionHotel.getAll(),
  });

  const result = data?.data.data || [];

  return {
    data: result,
    isLoading,
    error,
    total: data?.data.data.length,
  };

};