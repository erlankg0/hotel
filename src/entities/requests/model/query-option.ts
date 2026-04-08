import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { getApi } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionRequest = {
  baseKey: 'requests',
  get: ({ name, page, limit, enabled = true }: QueryOptions) => {
    return queryOptions({
      queryKey: ['requests', { name, page, limit }],
      queryFn: () => getApi({ name: name, page: page, limit: limit }),
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};