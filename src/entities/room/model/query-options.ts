import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';

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
  getById: (id: string) => queryOptions({
    queryFn: () => getById(id),
    queryKey: ['rooms', id],
    placeholderData: keepPreviousData,
  }),
};