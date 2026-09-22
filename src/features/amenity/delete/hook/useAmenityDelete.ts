import { useBaseDelete } from '@/shared/hooks';

import { QueryOptionAmenity } from '../../model/query-option';
import type { AmenityType } from '../../model/types';

export const useAmenityDelete = () => {
  return useBaseDelete<AmenityType, Awaited<ReturnType<typeof QueryOptionAmenity.delete>>>({
    queryKey: [QueryOptionAmenity.baseKey],
    mutationFn: QueryOptionAmenity.delete,

    successMessage: 'Удобство успешно удалено!',

    dialogTitle: 'Удалить удобство?',
    dialogDescription:
      'Вы уверены, что хотите удалить это удобство? Это действие нельзя отменить.',
  });
};