import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionGallery } from '../../model/query-option';
import { createApi } from '../api/create';

import type { GalleryType } from '../../model/type';
import type { GalleryDto } from '../model/dto';

export const useGalleryCreate = (roomId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (dto: GalleryDto) => createApi(dto, roomId),

    onMutate: async (data: GalleryDto) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionGallery.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionGallery.baseKey]);

      const optimistic = {
        ...data,
        id: new Date().getTime(),
      };

      await queryClient.setQueryData([QueryOptionGallery.baseKey], (old?: GalleryType[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onError: async (error, _, context) => {
      await handleAxiosError(error);
      if (context?.previous) {
        await queryClient.setQueryData([QueryOptionGallery.baseKey], context.previous);
      }
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionGallery.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: GalleryDto) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};
