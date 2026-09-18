import { useQuery } from '@tanstack/react-query';

import { QueryOptionContract } from '../model/query-option';

export const useContractQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionContract.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};