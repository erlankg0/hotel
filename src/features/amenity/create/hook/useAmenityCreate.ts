import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionAmenity } from '../../model/query-option';

import type { AmenityType, AmenityDto } from '../../model/types';

export const useAmenityCreate = () => {
  return useBaseCreate<AmenityDto, AmenityType>({
    queryKey: [QueryOptionAmenity.baseKey],
    mutationFn: QueryOptionAmenity.post,
  });
};