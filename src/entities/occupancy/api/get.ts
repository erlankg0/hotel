import { api } from '@/shared/api';

import type { OccupancyType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
  return await api.get<OccupancyType>('occupancy', params);
};