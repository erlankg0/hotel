import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';

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
  getById: (id: string) =>
    queryOptions({
      queryFn: () => getById(id),
      queryKey: ['country', id],
      placeholderData: keepPreviousData,
    }),
};