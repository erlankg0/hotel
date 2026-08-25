import { useQuery } from '@tanstack/react-query';

import { QueryOptionMarket } from '../model/query-option';

export const useMarketQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionMarket.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};