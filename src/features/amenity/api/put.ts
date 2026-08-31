import { api } from '@/shared/api';

import type { AmenityDto, AmenityType } from '../model/types';

export const put = async (id: string, dto: AmenityDto) => {
  return await api.put<AmenityType, AmenityDto>('amenity', id, dto);
};