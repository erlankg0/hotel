import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';
import { AlertDialogInfo } from '@/shared/ui/alerts';

import type { BaseResponse } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

interface UseBaseUpdateProps<TDto, TResponse> {
  queryKey: readonly unknown[];
  mutationFn: (id: string, dto: TDto) => Promise<AxiosResponse<BaseResponse<TResponse>>>;
  successMessage?: string;
  optimistic?: boolean;
  backOnSuccess?: boolean;
  isSuccessMessage?: boolean;
  dialogTitle?: string;
  dialogDescription?: string;
}

interface PendingUpdate<TDto> {
  id: string;
  dto: TDto;
}

export function useBaseUpdate<TDto, TResponse>({
  queryKey,
  mutationFn,
  successMessage = 'Успешно обновлено!',
  optimistic = true,
  backOnSuccess = true,
  isSuccessMessage = true,
  dialogTitle,
  dialogDescription,
}: UseBaseUpdateProps<TDto, TResponse>) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingUpdate, setPendingUpdate] = useState<PendingUpdate<TDto> | null>(null);

  const mutation = useMutation({
    mutationFn: ({ id, dto }: PendingUpdate<TDto>) => mutationFn(id, dto),

    onMutate: async ({ id, dto }) => {
      if (!optimistic) return {};
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(
        queryKey,
        (old?: Array<TResponse & { id: string }>) => {
          if (!old) return old;
          return old.map((item) => (item.id === id ? { ...item, ...dto } : item));
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
      if (isSuccessMessage) toast.success(successMessage);
      if (backOnSuccess) router.back();
    },

    onSettled: () => {
      setIsDialogOpen(false);
      setPendingUpdate(null);
    },
  });

  const handleOnSubmit = useCallback((payload: PendingUpdate<TDto>) => {
    setPendingUpdate(payload);
    setIsDialogOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!pendingUpdate) return;
    mutation.mutate(pendingUpdate);
  }, [pendingUpdate, mutation]);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setPendingUpdate(null);
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