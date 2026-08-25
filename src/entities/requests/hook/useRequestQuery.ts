import { useQuery } from '@tanstack/react-query';

import { QueryOptionRequest } from '../model/query-option';

export const useRequestQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionRequest.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};