import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRoomCategory } from '../../model/query-option';

import type { RoomCategoryDto, RoomCategortType } from '../../model/types';

interface UpdateRoomArgs {
  id: string;
  dto: Partial<RoomCategoryDto> & { id: string };
}

export const useRoomCategoryUpdate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: ({ id, dto }: UpdateRoomArgs) => QueryOptionRoomCategory.put(id, dto),
    onError: handleAxiosError,
    onMutate: async ({ id, dto }: UpdateRoomArgs) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionRoomCategory.baseKey] });

      const previous = queryClient.getQueryData<RoomCategortType[]>([QueryOptionRoomCategory.baseKey]);

      const optimistic = {
        ...dto,
        id: id,
      };

      await queryClient.setQueryData([QueryOptionRoomCategory.baseKey], (old?: RoomCategortType[]) => {
        if (!old) {
          return [optimistic];
        }
        return old.map((room) => {
          if (room.id == id) {
            return { ...room, ...dto };
          }
          return room;
        });
      });

      return { previous };

    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRoomCategory.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit({ id, dto }: UpdateRoomArgs) {
    mutate.mutate({ id: id, dto: dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};