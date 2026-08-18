import { api } from '@/shared/api';
import type { RoomType } from '../model/schema';

export async function delete_(id: string) {
  return await api.delete<RoomType>(`rooms/`, id);
}