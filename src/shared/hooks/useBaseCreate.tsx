import { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';
import { AlertDialogInfo } from '@/shared/ui/alerts';

import type { BaseResponse } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

interface UseBaseCreateProps<TDto, TResponse> {
  queryKey: readonly unknown[];
  mutationFn: (dto: TDto) => Promise<AxiosResponse<BaseResponse<TResponse>>>;

  successMessage?: string;
  optimistic?: boolean;
  backOnSuccess?: boolean;
  isSuccessMessage?: boolean;
  dialogTitle?: string;
  dialogDescription?: string;
}

export function useBaseCreate<TDto, TResponse>({
  queryKey,
  mutationFn,
  successMessage = 'Успешно сохранено!',
  optimistic = true,
  backOnSuccess = true,
  isSuccessMessage = true,
  dialogTitle = 'Подтвердить создание?',
  dialogDescription = 'Вы уверены, что хотите сохранить новую запись?',
}: UseBaseCreateProps<TDto, TResponse>) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingDto, setPendingDto] = useState<TDto | null>(null);

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

    onSettled: () => {
      setIsDialogOpen(false);
      setPendingDto(null);
    },
  });

  const handleOnSubmit = useCallback((dto: TDto) => {
    setPendingDto(dto);
    setIsDialogOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!pendingDto) return;
    mutation.mutate(pendingDto);
  }, [pendingDto, mutation]);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setPendingDto(null);
  }, []);

  const ConfirmDialog = (
    <AlertDialogInfo
      title={dialogTitle}
      description={dialogDescription}
      open={isDialogOpen}
      onOpenChange={handleOpenChange}
      onConfirm={handleConfirm}
      isPending={mutation.isPending}
    />
  );

  return {
    isPending: mutation.isPending,
    handleOnSubmit,
    ConfirmDialog,
  };
}