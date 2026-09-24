import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContract } from '../../model/query-option';

import type { ContractType, ContractDto } from '../../model/types';

export const useCreateContract = () => {
  return useBaseCreate<ContractDto, ContractType>({
    queryKey: [QueryOptionContract.baseKey],
    mutationFn: QueryOptionContract.post,
  });
};