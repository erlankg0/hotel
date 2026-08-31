import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionAmenity } from '../../model/query-option';

import type {
  AmenityType,
  AmenityDto,
} from '../../model/types';

export const useUpdateAmenity = () => {
  const mutation = useBaseUpdate<AmenityDto & { id: string }, AmenityType>({
    queryKey: [QueryOptionAmenity.baseKey],
    mutationFn: QueryOptionAmenity.put,
  });

  return {
    isPending: mutation.isPending,
    handleOnSubmit: mutation.handleOnSubmit,
  };
};