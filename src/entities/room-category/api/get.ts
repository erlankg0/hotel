import { api } from '@/shared/api';

import type { RoomCategortType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
  return await api.get<RoomCategortType>('room-categories', params);
};