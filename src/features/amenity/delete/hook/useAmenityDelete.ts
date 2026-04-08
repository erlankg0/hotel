import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionRequest } from '../../model/query-option';

import type { AmenityType } from '../../model/type';

export const useAmenityDelete = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (id: string) => QueryOptionRequest.delete(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionRequest.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionRequest.baseKey]);

      queryClient.setQueryData(
        [QueryOptionRequest.baseKey],
        (old?: AmenityType[]) => old?.filter(item => item.id != id),
      );

      return { previous };
    },
    onSuccess: async () => {
      toast.info('Успешно удалено!');
      await queryClient.invalidateQueries({ queryKey: [QueryOptionRequest.baseKey] });
    },
    onError: handleAxiosError,
  });

  return {
    isPending: mutate.isPending,
  };

};