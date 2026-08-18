import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionHotel = {
  baseKey: 'hotel',
  get: ({ title, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page }),
      queryKey: ['hotel', { title, limit, page }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};