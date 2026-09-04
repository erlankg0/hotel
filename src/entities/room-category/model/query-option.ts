import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionRoomCategory = {
  baseKey: 'room-categories',
  get: ({ title, page, limit, enabled }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, page, limit }),
      queryKey: ['room-categories', { title, page, limit, enabled }],
      enabled: enabled,
      placeholderData: keepPreviousData,
    });
  },
  getById: (id: string) => queryOptions({
    queryFn: () => getById(id),
    queryKey: ['room-categories', id],
    placeholderData: keepPreviousData,
  }),
};