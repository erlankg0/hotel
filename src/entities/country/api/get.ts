import { api } from '@/shared/api';

import type { CountryType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
  return await api.get<CountryType>('country', {
    ...params,
  });
};