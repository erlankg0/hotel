import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRooms } from '../../model/query-option';

import type { RoomDto } from '../../model/dto';
import type { RoomType } from '../../model/type';

interface UpdateRoomArgs {
  id: string;
  dto: Partial<RoomDto>;
}

export const useRoomUpdate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: ({ id, dto }: UpdateRoomArgs) => QueryOptionRooms.put(id, dto),
    onError: handleAxiosError,
    onMutate: async ({ id, dto }: UpdateRoomArgs) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });

      const previous = queryClient.getQueryData<RoomType[]>([QueryOptionRooms.baseKey]);

      const optimistic = {
        ...dto,
        id: id,
      };

      await queryClient.setQueryData([QueryOptionRooms.baseKey], (old?: RoomType[]) => {
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
      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });
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