import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionOccupancy } from '../../model/query-option';

import type { OccupancyType, OccupancyDto } from '../../model/types';

export const useOccupancyCreate = () => {
  return useBaseCreate<OccupancyDto, OccupancyType>({
    queryKey: [QueryOptionOccupancy.baseKey],
    mutationFn: QueryOptionOccupancy.post,
  });
};