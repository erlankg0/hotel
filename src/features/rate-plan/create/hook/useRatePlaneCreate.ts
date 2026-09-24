import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionRatePlan } from '../../model/query-option';

import type { RatePlanDto } from '../../model/types';

export const useRatePlanCreate = () => {
  return useBaseCreate<RatePlanDto, RatePlanDto>({
    queryKey: [QueryOptionRatePlan.baseKey],
    mutationFn: QueryOptionRatePlan.post,
    backOnSuccess: true,
    successMessage: 'Успешно сохранено!',
  });
};