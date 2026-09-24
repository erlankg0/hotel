import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionRoomCategory } from '../../model/query-option';

import type { RoomCategoryDto, RoomCategoryType } from '../../model/types';

export const useRoomCategoryCreate = () => {
  return useBaseCreate<RoomCategoryDto, RoomCategoryType>({
    queryKey: [QueryOptionRoomCategory.baseKey],
    mutationFn: QueryOptionRoomCategory.post,
    backOnSuccess: true,
    successMessage: 'Успешно сохранено!',
  });
};