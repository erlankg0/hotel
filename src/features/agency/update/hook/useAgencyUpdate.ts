import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionAgency } from '../../model/query-option';

import type {
  AgencyType,
  AgencyUpdateDto,
} from '../../model/types';

export const useAgencyUpdate = () => {
  return useBaseUpdate<
    AgencyUpdateDto & { operatorId: string },
    AgencyType
  >({
    queryKey: [QueryOptionAgency.baseKey],
    mutationFn: QueryOptionAgency.put,
  });
};