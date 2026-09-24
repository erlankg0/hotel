import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionRooms } from '../../model/query-option';

import type { RoomDto, RoomType } from '../../model/schema';

export const useRoomUpdate = () => {
  return useBaseUpdate<Partial<RoomDto>, RoomType>({
    queryKey: [QueryOptionRooms.baseKey],
    mutationFn: QueryOptionRooms.put,
    successMessage: 'Успешно сохранено!',
  });
};