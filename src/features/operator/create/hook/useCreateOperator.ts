import { useBaseCreate } from '@/shared/hooks';

import { QueryOptionOperator } from '../../model/query-option';

import type { OperatorType, OperatorCreateDto } from '../../model/types';

export const useCreateOperator = () => {
  const mutation = useBaseCreate<OperatorCreateDto & { hotelId: string }, OperatorType>({
    queryKey: [QueryOptionOperator.baseKey],
    mutationFn: QueryOptionOperator.post,
    backOnSuccess: true,
  });

  return {
    ...mutation,
    handleOnSubmit: async (dto: OperatorCreateDto & { hotelId: string }) => {
      const response = await mutation.handleOnSubmit(dto);
      return response.data.data;
    },
  };
};