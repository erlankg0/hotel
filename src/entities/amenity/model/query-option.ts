import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { getApi } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionAmenity = {
  baseKey: 'amenity',
  get: ({ name, limit, enabled, page }: QueryOptions) => {
    return queryOptions({
      queryKey: ['amenity', { name, limit, page }],
      queryFn: () => getApi({ name, limit, page }),
      placeholderData: keepPreviousData,
      enabled: enabled,
    });
  },
};