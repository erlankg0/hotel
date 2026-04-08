import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRequest } from '../../model/query-option';
import { createApi } from '../api/create';

import type { AmenityType } from '../../model/type';
import type { AmenityDto } from '../model/dto';

export const useAmenityCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createApi,
    onError: handleAxiosError,
    onMutate: async (data: AmenityDto) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionRequest.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionRequest.baseKey]);

      const optimistic = {
        ...data,
      };

      await queryClient.setQueryData([QueryOptionRequest.baseKey], (old?: AmenityType[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRequest.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: AmenityDto) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};