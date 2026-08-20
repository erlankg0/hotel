import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionOccupancyRule } from '../../model/query-option';

import type { OccupancyRuleType, OccupancyRuleDto } from '../../model/types';

export const useOccupancyRuleCreate = () => {
  const mutation = useBaseCreate<OccupancyRuleDto, OccupancyRuleType>({
    queryKey: [QueryOptionOccupancyRule.baseKey],
    mutationFn: QueryOptionOccupancyRule.post,
  });

  async function handleOnSubmit(dto: OccupancyRuleDto) {
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