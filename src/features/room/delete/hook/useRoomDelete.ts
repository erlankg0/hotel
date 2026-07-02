import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRooms } from '../../model/query-option';

import type { RoomType } from '../../model/type';

export const useRoomDelete = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: QueryOptionRooms.delete_,
    onError: handleAxiosError,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });

      const previous = queryClient.getQueryData<RoomType[]>([QueryOptionRooms.baseKey]);

      queryClient.setQueryData<RoomType[]>([QueryOptionRooms.baseKey], (old = []) => {
        return old.filter(room => room.id !== id);
      });

      return { previous };
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });
      toast.success('Успешно удалено!');
      router.back();
    },
  });

  function handleOnSubmit(id: string) {
    mutate.mutate(id);
  }

  return {
    isPending: mutate.isPending,
    handleOnDelete: handleOnSubmit,
  };
};