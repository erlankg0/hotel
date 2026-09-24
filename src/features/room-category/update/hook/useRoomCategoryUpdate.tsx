import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionRoomCategory } from '../../model/query-option';

import type {
  RoomCategoryDto,
  RoomCategoryType,
} from '../../model/types';

export const useRoomCategoryUpdate = () => {
  return useBaseUpdate<Partial<RoomCategoryDto>, RoomCategoryType>({
    queryKey: [QueryOptionRoomCategory.baseKey],
    mutationFn: QueryOptionRoomCategory.put,
    successMessage: 'Успешно сохранено!',
  });
};