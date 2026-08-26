import { api } from '@/shared/api';

import type { CountryUpdateDto, CountryType } from '../model/types';

export const put = async (id: string, dto: CountryUpdateDto) => {
  return await api.put<CountryType, CountryUpdateDto>('country', id, dto);
};