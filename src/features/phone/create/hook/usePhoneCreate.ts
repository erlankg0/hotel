import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionPhone } from '../../model/query-option';

import type { PhoneDto } from '../../model/schema';

export const usePhoneCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: QueryOptionPhone.post,

    onMutate: async (data: PhoneDto) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionPhone.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionPhone.baseKey]);

      const optimistic = {
        ...data,
      };

      await queryClient.setQueryData([QueryOptionPhone.baseKey], (old?: PhoneDto[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onError: async (error, _, context) => {
      await handleAxiosError(error);
      if (context?.previous) {
        await queryClient.setQueryData([QueryOptionPhone.baseKey], context.previous);
      }
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionPhone.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: PhoneDto) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};