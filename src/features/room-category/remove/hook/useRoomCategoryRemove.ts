import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRoomCategory } from '../../model/query-option';

import type { RoomCategortType } from '../../model/types';

export const useRoomCategortDelete = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: QueryOptionRoomCategory.remove,
    onError: handleAxiosError,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRoomCategory.baseKey] });

      const previous = queryClient.getQueryData<RoomCategortType[]>([QueryOptionRoomCategory.baseKey]);

      queryClient.setQueryData<RoomCategortType[]>([QueryOptionRoomCategory.baseKey], (old = []) => {
        return old.filter(room => room.id !== id);
      });

      return { previous };
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRoomCategory.baseKey] });
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