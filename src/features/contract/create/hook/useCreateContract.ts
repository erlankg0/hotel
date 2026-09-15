import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContract } from '../../model/query-option';

import type { ContractType, ContractDto } from '../../model/types';

export const useCreateContract = () => {
  const mutation = useBaseCreate<ContractDto, ContractType>({
    queryKey: [QueryOptionContract.baseKey],
    mutationFn: QueryOptionContract.post,
  });

  return {
    ...mutation,
    handleOnSubmit: async (dto: ContractDto) => {
      const response = await mutation.handleOnSubmit(dto);
      return response.data.data;
    },
  };
};