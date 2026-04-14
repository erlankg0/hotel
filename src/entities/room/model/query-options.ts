import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionsRooms = {
  baseKey: 'rooms',
  get: ({ name, page, limit, enabled }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ name, page, limit }),
      queryKey: ['rooms', { name, page, limit, enabled }],
      enabled: enabled,
      placeholderData: keepPreviousData,
    });
  },
};