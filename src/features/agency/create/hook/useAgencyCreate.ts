import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionAgency } from '../../model/query-option';

import type { AgencyDto, AgencyType } from '../../model/types';

export const useAgencyCreate = () => {
  return useBaseCreate<
    AgencyDto & { operatorId: string },
    AgencyType
  >({
    queryKey: [QueryOptionAgency.baseKey],
    mutationFn: QueryOptionAgency.post,
  });
};