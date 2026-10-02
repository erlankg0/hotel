import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContractRoom } from '../../model/query-option';

export const useContractRoomSwitch = () => {
  return useBaseCreate<{ id: string }, object>({
    queryKey: [QueryOptionContractRoom.baseKey],
    mutationFn: QueryOptionContractRoom.post,
    optimistic: false,
    backOnSuccess: false,
    isSuccessMessage: false,
  });
};
