import { api } from '@/shared/api';

import type { RoomType } from '../model/type';

export async function getById(id: string) {
  return await api.getById<RoomType>(`/rooms`, id);
}