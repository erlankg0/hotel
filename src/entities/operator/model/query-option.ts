import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionOperator = {
  baseKey: 'operator',
  get: ({ title, limit, enabled, page, id }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page, id }),
      queryKey: ['operator', { title, limit, page, id }],
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
  getById: (id: string) =>
    queryOptions({
      queryFn: () => getById(id),
      queryKey: ['operator', id],
      placeholderData: keepPreviousData,
    }),
};