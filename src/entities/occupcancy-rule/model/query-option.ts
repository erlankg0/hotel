import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionOccupancyRule = {
  baseKey: 'occupancy-rule',
  get: ({ title, limit, enabled, page, id }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page, id }),
      queryKey: ['occupancy', { title, limit, page, id }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
  getById: (id: string) =>
    queryOptions({
      queryFn: () => getById(id),
      queryKey: ['occupancy', id],
      placeholderData: keepPreviousData,
    }),
};