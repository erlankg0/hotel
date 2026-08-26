import { api } from '@/shared/api';

import type { CountryUpdateDto, CountryType } from '../model/types';

export const put = async (id: string, dto: CountryUpdateDto & { marketId: string }) => {
  return await api.put<CountryType, CountryUpdateDto & { marketId: string }>('country', id, dto);
};