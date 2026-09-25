import { api } from '@/shared/api';

import type { RoomCategortType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export async function getByContract(params: QueryOptions) {
  return await api.get<RoomCategortType>(`/room-categories/contract/${params.id}`, {
    page: params.page,
    limit: params.limit,
  });
}