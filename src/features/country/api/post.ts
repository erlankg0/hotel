import { api } from '@/shared/api';

import type { CountryDto, CountryType } from '../model/types';

export const post = async (dto: CountryDto & { marketId: string }) => {
  return await api.post<CountryType, CountryDto & { marketId: string }>('country', dto);
};