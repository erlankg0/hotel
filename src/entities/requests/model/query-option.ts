import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionRequest = {
  baseKey: 'requests',
  get: ({ title, page, limit, enabled = true }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title: title, page: page, limit: limit }),
      queryKey: ['requests', { title, page, limit }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};