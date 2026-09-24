import { api } from '@/shared/api';

import type { RoomCategortType } from '../model/types';

export async function getById(id: string) {
  return await api.getById<RoomCategortType>(`/room-category`, id);
}