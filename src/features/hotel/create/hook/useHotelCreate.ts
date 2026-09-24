import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionHotel } from '../../model/query-option';

import type { HotelType, HotelDto } from '../../model/types';

export const useHotelCreate = () => {
  return useBaseCreate<HotelDto, HotelType>({
    queryKey: [QueryOptionHotel.baseKey],
    mutationFn: QueryOptionHotel.post,
    successMessage: 'Отель успешно создан!',
    dialogTitle: 'Создать отель?',
    dialogDescription: 'Проверьте данные перед сохранением.',
  });
};