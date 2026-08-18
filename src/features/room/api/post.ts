import { api } from '@/shared/api'
import type { RoomDto, RoomType } from '../model/schema';

export async function post(dto: RoomDto) {
  return await api.post<RoomType, RoomDto>('rooms', dto);
}