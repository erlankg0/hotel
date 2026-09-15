import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionHotel } from '../../model/query-option';

import type {
  HotelType,
  HotelDto,
} from '../../model/types';

export const useHotelUpdate = () => {
  const mutation = useBaseUpdate<HotelDto, HotelType>({
    queryKey: [QueryOptionHotel.baseKey],
    mutationFn: QueryOptionHotel.put,
  });

  return {
    isPending: mutation.isPending,
    handleOnSubmit: mutation.handleOnSubmit,
  };
};