import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionOccupancy = {
  baseKey: 'occupancy',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['occupancy', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};