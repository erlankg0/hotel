import { useBaseDelete } from '@/shared/hooks/useBaseRemove';

import { QueryOptionRequest } from '../../model/query-option';

import type { RequestType } from '../../model/types';


export const useRequestDelete = () => {
  return useBaseDelete<RequestType, RequestType>({
    queryKey: [QueryOptionRequest.baseKey],
    mutationFn: QueryOptionRequest.remove,
  });
};