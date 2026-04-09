import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRooms } from '../../model/query-option';
import { createApi } from '../api/create';

import type { RoomType } from '../../model/type';
import type { RoomDto } from '../model/dto';

export const useRoomCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createApi,
    onError: handleAxiosError,
    onMutate: async (data: RoomDto) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionRooms.baseKey]);

      const optimistic = {
        ...data,
      };

      await queryClient.setQueryData([QueryOptionRooms.baseKey], (old?: RoomType[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRooms.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: RoomDto) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};