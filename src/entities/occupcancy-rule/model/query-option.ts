import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getByID';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionOccupancyRule = {
  baseKey: 'occupancy-rule',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['occupancy', { title, limit, page }],
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