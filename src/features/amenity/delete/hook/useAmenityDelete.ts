import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { QueryOptionAmenity } from '../../model/query-option';

import type { AmenityType } from '../../model/schema';

export const useAmenityDelete = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (id: string) => QueryOptionAmenity.delete(id),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: [QueryOptionAmenity.baseKey] });

      const previous = queryClient.getQueryData([QueryOptionAmenity.baseKey]);

      queryClient.setQueryData(
        [QueryOptionAmenity.baseKey],
        (old?: AmenityType[]) => old?.filter(item => item.id != id),
      );

      return { previous };
    },
    onSuccess: async () => {
      toast.info('Успешно удалено!');
      await queryClient.invalidateQueries({ queryKey: [QueryOptionAmenity.baseKey] });
    },
    onError: handleAxiosError,
  });

  return {
    isPending: mutate.isPending,
  };

};