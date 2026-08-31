import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionRequest } from '../../model/query-option';

import type {
  RequestType,
  RequestDto,
} from '../../model/types';

export const useUpdateRequest = () => {
  const mutation = useBaseUpdate<RequestDto & { id: string }, RequestType>({
    queryKey: [QueryOptionRequest.baseKey],
    mutationFn: QueryOptionRequest.put,
  });

  return {
    isPending: mutation.isPending,
    handleOnSubmit: mutation.handleOnSubmit,
  };
};