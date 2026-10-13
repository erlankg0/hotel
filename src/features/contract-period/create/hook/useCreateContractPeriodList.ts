import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContractPeriod } from '../../model/query-option';

import type { ContractPeriodFormValues, ContractPeriodDto } from '../../model/types';

export const useCreateContractPeriodList = () => {
  return useBaseCreate<ContractPeriodDto, ContractPeriodFormValues>({
    queryKey: [QueryOptionContractPeriod.baseKey],
    mutationFn: QueryOptionContractPeriod.post,
  });
};