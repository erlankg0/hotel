import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionPhone } from '../../model/query-option';

import type { PhoneDto, PhoneType } from '../../model/schema';

export const usePhoneCreate = () => {
  return useBaseCreate<PhoneDto, PhoneType>({
    queryKey: [QueryOptionPhone.baseKey],
    mutationFn: QueryOptionPhone.post,
    backOnSuccess: false,
    isSuccessMessage: false,
  });
};