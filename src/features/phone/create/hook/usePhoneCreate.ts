import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionPhone } from '../../model/query-option';

import type { PhoneDto, PhoneType } from '../../model/schema';

export const usePhoneCreate = () => {
  const mutation = useBaseCreate<PhoneDto, PhoneType>({
    queryKey: [QueryOptionPhone.baseKey],
    mutationFn: QueryOptionPhone.post,
    backOnSuccess: false,
    isSuccessMessage: false,
  });

  return {
    ...mutation,
    handleOnSubmit: async (dto: PhoneDto) => {
      const response = await mutation.handleOnSubmit(dto);
      return response.data.data;
    },
  };
};