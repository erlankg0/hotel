import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionHotel } from '../../model/query-option';

import type { HotelDto, HotelType } from '../../model/types';

export const useHotelCreate = () => {
  const mutation = useBaseCreate<HotelDto, HotelType>({
    queryKey: [QueryOptionHotel.baseKey],
    mutationFn: QueryOptionHotel.post,
  });

  async function handleOnSubmit(dto: HotelDto) {
    const response = await mutation.handleOnSubmit({ ...dto });
    if (response.status !== 200) {
      return response.data.data;
    }
    return response.data.message;
  }

  return {
    isPending: mutation.isPending,
    handleOnSubmit: handleOnSubmit,
  };
};