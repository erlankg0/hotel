import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import type { BaseResponse } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

interface UseBaseUpdateProps<TDto, TResponse> {
  queryKey: readonly unknown[];

  mutationFn: (
    id: string,
    dto: TDto,
  ) => Promise<AxiosResponse<BaseResponse<TResponse>>>;

  successMessage?: string;
  optimistic?: boolean;
  backOnSuccess?: boolean;
  isSuccessMessage?: boolean;
}

export function useBaseUpdate<TDto, TResponse>({
                                                 queryKey,
                                                 mutationFn,
                                                 successMessage = 'Успешно обновлено!',
                                                 optimistic = true,
                                                 backOnSuccess = true,
                                                 isSuccessMessage = true,
                                               }: UseBaseUpdateProps<TDto, TResponse>) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: TDto }) =>
      mutationFn(id, dto),

    onMutate: async ({ id, dto }) => {
      if (!optimistic) return {};

      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(
        queryKey,
        (old?: Array<TResponse & { id: string }>) => {
          if (!old) return old;

          return old.map((item) =>
            item.id === id
              ? { ...item, ...dto }
              : item,
          );
        },
      );

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