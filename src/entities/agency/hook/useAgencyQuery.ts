import { useQuery } from '@tanstack/react-query';

import { QueryOptionAgency } from '../model/query-option';

export const useAgencyQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionAgency.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};