import { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { handleAxiosError } from '@/shared/lib/handleAxiosError';
import { AlertDialogDestructive } from '@/shared/ui/alerts';

interface UseBaseDeleteProps<TResponse> {
  queryKey: readonly unknown[];

  mutationFn: (id: string) => Promise<TResponse>;

  successMessage?: string;
  optimistic?: boolean;
  isSuccessMessage?: boolean;

  dialogTitle?: string;
  dialogDescription?: string;
}

export function useBaseDelete<TItem extends { id: string }, TResponse>({
  queryKey,
  mutationFn,

  successMessage = 'Успешно удалено!',
  optimistic = true,
  isSuccessMessage = true,

  dialogTitle = 'Подтвердить удаление?',
  dialogDescription = 'Вы уверены, что хотите удалить эту запись?',
}: UseBaseDeleteProps<TResponse>) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn,

    onMutate: async (id: string) => {
      if (!optimistic) return {};

      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData<TItem[]>(queryKey);

      queryClient.setQueryData<TItem[]>(
        queryKey,
        old => old?.filter(item => item.id !== id),
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
      if (isSuccessMessage) {
        toast.success(successMessage);
      }

      await queryClient.invalidateQueries({ queryKey });
      router.back();
    },

    onSettled: () => {
      setIsDialogOpen(false);
      setPendingId(null);
    },
  });

  const handleOnDelete = useCallback((id: string) => {
    setPendingId(id);
    setIsDialogOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!pendingId) return;

    mutation.mutate(pendingId);
  }, [pendingId, mutation]);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsDialogOpen(open);

    if (!open) {
      setPendingId(null);
    }
  }, []);

  const ConfirmDialog = (
    <AlertDialogDestructive
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
    handleOnDelete,
    ConfirmDialog,
  };
}