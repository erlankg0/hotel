import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';
import { getById } from '../api/getById';
import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionAgency = {
  baseKey: 'agency',
  get: ({ title, limit, enabled, page, id }: QueryOptions) => {
    return queryOptions({
      queryFn: () => get({ title, limit, page, operatorId: id }),
      queryKey: ['agency', { title, limit, page }],
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