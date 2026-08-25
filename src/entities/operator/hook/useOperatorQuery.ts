import { useQuery } from '@tanstack/react-query';

import { QueryOptionOperator } from '../model/query-option';

export const useOperatorQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionOperator.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};