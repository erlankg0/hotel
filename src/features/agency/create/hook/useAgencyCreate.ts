import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionAgency } from '../../model/query-option';

import type { AgencyDto } from '../../model/schema';

export const useAgencyCreate = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: QueryOptionAgency.post,

    onMutate: async (data: AgencyDto) => {

      await queryClient.cancelQueries({ queryKey: [QueryOptionAgency.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionAgency.baseKey]);

      const optimistic = {
        ...data,
      };

      await queryClient.setQueryData([QueryOptionAgency.baseKey], (old?: AgencyDto[]) => {
        if (!old) return [optimistic];
        return [...old, optimistic];
      });

      return { previous };

    },
    onError: async (error, _, context) => {
      await handleAxiosError(error);
      if (context?.previous) {
        await queryClient.setQueryData([QueryOptionAgency.baseKey], context.previous);
      }
    },
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionAgency.baseKey] });
      toast.success('Успешно сохранено!');
      router.back();
    },
  });

  function handleOnSubmit(dto: AgencyDto) {
    mutate.mutate({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit,
  };
};