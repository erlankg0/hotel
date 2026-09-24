import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionEmail } from '../../model/query-option';

import type { EmailDto, EmailType } from '../../model/schema';

export const useEmailCreate = () => {
  return useBaseCreate<EmailDto, EmailType>({
    queryKey: [QueryOptionEmail.baseKey],
    mutationFn: QueryOptionEmail.post,
    backOnSuccess: false,
    isSuccessMessage: false,
  });
};