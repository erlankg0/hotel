import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionEmail } from '../../model/query-option';

import type { EmailDto, EmailType } from '../../model/schema';

export const useEmailCreate = () => {
  const mutation = useBaseCreate<EmailDto, EmailType>({
    queryKey: [QueryOptionEmail.baseKey],
    mutationFn: QueryOptionEmail.post,
    backOnSuccess: false,
    isSuccessMessage: false,
  });

  return {
    ...mutation,
    handleOnSubmit: async (dto: EmailDto) => {
      const response = await mutation.handleOnSubmit(dto);
      return response.data.data;
    },
  };
};