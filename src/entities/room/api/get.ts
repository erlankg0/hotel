import type { RoomType } from '../model/type';
import type { QueryOptions } from '@/shared/types/response';
import { api } from '@/shared/api'

export async function get(params: QueryOptions) {
  return await api.get<RoomType[]>('/rooms', params);
}