import { api } from '@/shared/api'

import type { RoomType } from '../model/type';
import type { QueryOptions } from '@/shared/types/response';

export async function get(params: QueryOptions) {
  return await api.get<RoomType>('/rooms', params);
}