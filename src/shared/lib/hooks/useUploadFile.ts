import { useMutation, useQueryClient } from '@tanstack/react-query';

import { uploadFileApi } from '../../api/file/file.api';
import { handleAxiosError } from '../handleAxiosError';

import type { FileType } from '../../api/file/type';

export function useUploadFile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadFileApi,
    onMutate: async (file: File) => {
      await queryClient.cancelQueries({ queryKey: ['file'] });

      const previous = await queryClient.getQueryData(['file']);

      const optimisticFile = {
        id: Math.random().toString(),
        url: URL.createObjectURL(file),
        name: file.name,
        isOptimistic: true,
      };

      await queryClient.setQueryData(['file'], (old?: FileType[]) => {
        if (!old) return [optimisticFile];
        return [...old, optimisticFile];
      });

      return { previous };
    },
    onError: async (err, _, context) => {
      await handleAxiosError(err);
      if (context?.previous) {
        queryClient.setQueryData(['file'], context.previous);
      }
    },
    onSuccess:async (realData: FileType) => {
      queryClient.setQueryData(['file'], (old: (FileType & { isOptimistic?: boolean })[] | undefined) => {
        const filtered = old?.filter(f => !f.isOptimistic) ?? [];
        return [...filtered, realData];
      });

     await queryClient.invalidateQueries({ queryKey: ['file'] });
    },
  });
}