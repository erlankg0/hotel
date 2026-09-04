import { useBaseCreate } from "@/shared/hooks/useBaseCreate"

import { QueryOptionRoomCategory } from '../../model/query-option';

import type { RoomCategoryDto, RoomCategortType } from '../../model/types';

export const useRoomCategoryCreate = ()=>{
  const mutate = useBaseCreate<RoomCategoryDto, RoomCategortType>({
    queryKey: [QueryOptionRoomCategory.baseKey],
    mutationFn: QueryOptionRoomCategory.post,
    backOnSuccess: true,
    successMessage: "Успешно сохранено!"
  })

  
  async function handleOnSubmit(dto: RoomCategoryDto) {
   await mutate.handleOnSubmit({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit: handleOnSubmit,
  }
}