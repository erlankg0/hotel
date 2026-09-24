import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionOccupancyRule } from '../../model/query-option';

import type {
  OccupancyRuleType,
  OccupancyRuleDto,
} from '../../model/types';

export const useOccupancyRuleCreate = () => {
  return useBaseCreate<
    OccupancyRuleDto & { occupancyId: string },
    OccupancyRuleType
  >({
    queryKey: [QueryOptionOccupancyRule.baseKey],
    mutationFn: QueryOptionOccupancyRule.post,
  });
};