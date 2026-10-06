import { useQuery } from '@tanstack/react-query';

import { QueryOptionOccupancyRule } from '../model/query-option';

export const useOccupancyRuleQuery = (id: string) => {
  const {
    data,
    error,
    isLoading,
  } = useQuery({
    ...QueryOptionOccupancyRule.getById(id),
  });

  return {
    data: data?.data.data,
    isLoading,
    error,
  };
};