import { useBaseCreate } from "@/shared/hooks/useBaseCreate"

import { QueryOptionRooms } from '../../model/query-option';

import type { RoomDto, RoomType } from '../../model/schema';

export const useRoomCreate = ()=>{
  const mutate = useBaseCreate<RoomDto, RoomType>({
    queryKey: [QueryOptionRooms.baseKey],
    mutationFn: QueryOptionRooms.post,
    backOnSuccess: true,
    successMessage: "Успешно сохранено!"
  })

  
  async function handleOnSubmit(dto: RoomDto) {
   await mutate.handleOnSubmit({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit: handleOnSubmit,
  }
}