import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionCountry = {
  baseKey: 'country',
  get: ({ title, limit, enabled, page, id }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page, id: id }),
      queryKey: ['country', { title, limit, page, id }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};