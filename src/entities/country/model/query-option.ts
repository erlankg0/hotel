import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionCountry = {
  baseKey: 'country',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['country', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};