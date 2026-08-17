import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionAgency } from '../../model/query-option';

import type { AgencyDto, AgencyType } from '../../model/types';

export const useAgencyCreate = () => {
  const mutation = useBaseCreate<AgencyDto & { operatorId: string }, AgencyType>({
    queryKey: [QueryOptionAgency.baseKey],
    mutationFn: QueryOptionAgency.post,
  });

  async function handleOnSubmit(dto: AgencyDto & { operatorId: string }) {
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