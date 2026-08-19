import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionOccupancy } from '../../model/query-option';

import type { OccupancyType, OccupancyDto } from '../../model/types';

export const useOccupancyCreate = () => {
  const mutation = useBaseCreate<OccupancyDto, OccupancyType>({
    queryKey: [QueryOptionOccupancy.baseKey],
    mutationFn: QueryOptionOccupancy.post,
  });

  async function handleOnSubmit(dto: OccupancyDto) {
    const response = await mutation.handleOnSubmit({ ...dto });
    if (response.status !== 200) {
      return response.data.data;
    }
    return response.data.message;
  }

  return {
    isPending: mutation.isPending,
    handleOnSubmit: handleOnSubmit,
  };
};