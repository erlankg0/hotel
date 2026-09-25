import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getByContract } from '../api/getByContract';
import { getById } from '../api/getById';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionRoomCategory = {
  baseKey: 'room-categories',

  get: ({ title, page, limit, enabled }: QueryOptions) =>
    queryOptions({
      queryKey: [
        'room-categories',
        'list',
        { title, page, limit },
      ],
      queryFn: () => get({ title, page, limit }),
      enabled,
      placeholderData: keepPreviousData,
    }),

  getByContract: ({ title, page, limit, enabled, id }: QueryOptions) =>
    queryOptions({
      queryKey: [
        'room-categories',
        'contract',
        id,
        { title, page, limit },
      ],
      queryFn: () => getByContract({ title, page, limit, id }),
      enabled: enabled && !!id,
      placeholderData: keepPreviousData,
    }),

  getById: (id: string) =>
    queryOptions({
      queryKey: ['room-categories', id],
      queryFn: () => getById(id),
      enabled: !!id,
    }),
};