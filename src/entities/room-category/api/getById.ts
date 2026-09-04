import type { RoomCategortType } from '../model/types';
import { api } from '@/shared/api';

export async function getById(id: string) {
  return await api.getById<RoomCategortType>(`/room-category`, id);
}