import { api } from '@/shared/api';

import type { HotelDto, HotelType } from '../model/types';

export const put = async (id: string, dto: HotelDto) => {
  return await api.put<HotelType, HotelDto>('hotels', id, dto);
};