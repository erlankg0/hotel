import { api } from '@/shared/api';

import type { OccupancyType, OccupancyDto } from '../model/types';

export const post = async (dto: OccupancyDto) => {
  return await api.post<OccupancyType, OccupancyDto>('occupancy', dto);
};