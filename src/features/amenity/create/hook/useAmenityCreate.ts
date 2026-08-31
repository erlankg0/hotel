import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionAmenity } from '../../model/query-option';

import type { AmenityType, AmenityDto } from '../../model/types';

export const useAmenityCreate = () => {
  const mutation = useBaseCreate<AmenityDto, AmenityType>({
    queryKey: [QueryOptionAmenity.baseKey],
    mutationFn: QueryOptionAmenity.post,
  });

  return {
    ...mutation,
    handleOnSubmit: async (dto: AmenityDto) => {
      const response = await mutation.handleOnSubmit(dto);
      return response.data.data;
    },
  };
};