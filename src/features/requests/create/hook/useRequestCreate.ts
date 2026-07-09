import { useBaseCreate } from "@/shared/hooks/useBaseCreate";

import { QueryOptionRequest } from '../../model/query-option';

import type { RequestType, RequestDto } from '../../model/schema';

export const useRequestCreate = () => {
  
  const mutate = useBaseCreate<RequestDto, RequestType>({
    queryKey: [QueryOptionRequest.baseKey],
    mutationFn: QueryOptionRequest.post,
  });

  return {
    isPending: mutate.isPending,
    handleOnSubmit: async (dto: RequestDto)=>{
      const response = await mutate.handleOnSubmit(dto);
      return response.data.data;
    }
  };
};