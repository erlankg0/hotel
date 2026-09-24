import { useBaseDelete } from '@/shared/hooks';

import { QueryOptionHotel } from '../../model/query-option';

import type { HotelType } from '../../model/types';

export const useHotelRemove = (hotelId: string) => {
  const {
    handleOnDelete: handleDelete,
    ...rest
  } = useBaseDelete<
    HotelType,
    Awaited<ReturnType<typeof QueryOptionHotel.remove>>
  >({
    queryKey: [QueryOptionHotel.baseKey],
    mutationFn: QueryOptionHotel.remove,

    successMessage: 'Отель успешно удалён!',

    dialogTitle: 'Удалить отель?',
    dialogDescription:
      'Вы уверены, что хотите удалить этот отель? Это действие нельзя отменить.',
  });

  const handleOnDelete = () => {
    handleDelete(hotelId);
  };

  return {
    ...rest,
    handleOnDelete,
  };
};