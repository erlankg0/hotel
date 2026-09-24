import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionRooms } from '../../model/query-option';

import type { RoomDto, RoomType } from '../../model/schema';

export const useRoomCreate = () => {
  return useBaseCreate<RoomDto, RoomType>({
    queryKey: [QueryOptionRooms.baseKey],
    mutationFn: QueryOptionRooms.post,
    backOnSuccess: true,
    successMessage: 'Успешно сохранено!',
  });
};