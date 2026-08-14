import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionAgency = {
  baseKey: 'agency',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['agency', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};