import { useBaseCreate } from "@/shared/hooks/useBaseCreate"

import { QueryOptionRatePlan } from '../../model/query-option';

import type { RatePlanDto } from '../../model/types';

export const useRatePlanCreate = ()=>{
  const mutate = useBaseCreate<RatePlanDto, RatePlanDto>({
    queryKey: [QueryOptionRatePlan.baseKey],
    mutationFn: QueryOptionRatePlan.post,
    backOnSuccess: true,
    successMessage: "Успешно сохранено!"
  })

  
  async function handleOnSubmit(dto: RatePlanDto) {
   await mutate.handleOnSubmit({ ...dto });
  }

  return {
    isPending: mutate.isPending,
    handleOnSubmit: handleOnSubmit,
  }
}