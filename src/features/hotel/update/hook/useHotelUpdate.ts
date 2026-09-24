import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionHotel } from '../../model/query-option';

import type { HotelType, HotelDto } from '../../model/types';

export const useHotelUpdate = () => {
  return useBaseUpdate<HotelDto, HotelType>({
    queryKey: [QueryOptionHotel.baseKey],
    mutationFn: QueryOptionHotel.put,
  });
};