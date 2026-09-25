import { api } from '@/shared/api';

import type { ContractRoomDto } from '../add/model/types'

export const add_rooms = async (dto: ContractRoomDto) => {
    return await api.post<{}, ContractRoomDto>('contracts/add-rooms', dto)
}