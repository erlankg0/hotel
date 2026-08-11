import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionOperator = {
  baseKey: 'operator',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['amenity', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};