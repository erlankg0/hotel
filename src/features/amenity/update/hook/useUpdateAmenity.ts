import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionAmenity } from '../../model/query-option';

import type {
  AmenityType,
  AmenityDto,
} from '../../model/types';

export const useUpdateAmenity = () => {
  return useBaseUpdate<AmenityDto, AmenityType>({
    queryKey: [QueryOptionAmenity.baseKey],
    mutationFn: QueryOptionAmenity.put,
  });
};