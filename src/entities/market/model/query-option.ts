import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionMarket = {
  baseKey: 'market',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['market', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};