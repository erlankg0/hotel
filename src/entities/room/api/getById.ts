import type { RoomType } from '../model/type';
import { api } from '@/shared/api';

export async function getById(id: string) {
  return await api.getById<RoomType>(`/rooms`, id);
}