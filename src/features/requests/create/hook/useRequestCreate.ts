import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionRequest } from '../../model/query-option';

import type { RequestType, RequestDto } from '../../model/types';

export const useRequestCreate = () => {
  return useBaseCreate<RequestDto, RequestType>({
    queryKey: [QueryOptionRequest.baseKey],
    mutationFn: QueryOptionRequest.post,
  });
};