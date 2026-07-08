import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionEmail } from '../../model/query-option';

import type { EmailType } from '../../model/schema';

export const useEmailCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: QueryOptionEmail.post,

    onMutate: async (data: EmailType) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionEmail.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionEmail.baseKey]);

      const optimistic = {
        ...data,
      };

      await queryClient.setQueryData([QueryOptionEmail.baseKey], (old?: EmailType[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onError: async (error, _, context) => {
      await handleAxiosError(error);
      if (context?.previous) {
        await queryClient.setQueryData([QueryOptionEmail.baseKey], context.previous);
      }
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionEmail.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: EmailType) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};