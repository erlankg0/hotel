import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import type { BaseResponse } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

interface UseBaseCreateProps<TDto, TResponse> {
  queryKey: readonly unknown[];
  mutationFn: (
    dto: TDto,
  ) => Promise<AxiosResponse<BaseResponse<TResponse>>>;

  successMessage?: string;
  optimistic?: boolean;
  backOnSuccess?: boolean;
  isSuccessMessage?: boolean;
}

export function useBaseCreate<TDto, TResponse>({
                                                 queryKey,
                                                 mutationFn,
                                                 successMessage = 'Успешно сохранено!',
                                                 optimistic = true,
                                                 backOnSuccess = true,
                                                 isSuccessMessage = true,
                                               }: UseBaseCreateProps<TDto, TResponse>) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,

    onMutate: async (data: TDto) => {
      if (!optimistic) return {};

      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old?: TDto[]) => {
        if (!old) return [data];
        return [...old, data];
      });

      return { previous };
    },

    onError: async (error, _, context) => {
      await handleAxiosError(error);

      if (optimistic && context?.previous) {
        queryClient.setQueryData(queryKey, context.previous);
      }
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey });

      if (isSuccessMessage) {
        toast.success(successMessage);
      }

      if (backOnSuccess) {
        router.back();
      }
    },
  });

  return {
    isPending: mutation.isPending,
    handleOnSubmit: mutation.mutateAsync,
  };
}