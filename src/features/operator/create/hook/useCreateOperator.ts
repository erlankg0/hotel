import { useBaseCreate } from '@/shared/hooks';

import { QueryOptionOperator } from '../../model/query-option';

import type { OperatorType, OperatorCreateDto } from '../../model/types';

export const useCreateOperator = () => {
  return useBaseCreate<
    OperatorCreateDto & { hotelId: string },
    OperatorType
  >({
    queryKey: [QueryOptionOperator.baseKey],
    mutationFn: QueryOptionOperator.post,
    backOnSuccess: true,
  });
};