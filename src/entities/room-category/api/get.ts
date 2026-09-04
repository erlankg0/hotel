import { api } from '@/shared/api';
import { QueryOptions } from '@/shared/types/response'
import type { RoomCategortType } from '../model/types'

export const get = async (params: QueryOptions) => {
    return await api.get<RoomCategortType>('room-category', params)
}