import { api } from '@/shared/api';

import type { ContarctAddRoomDto, ContractType } from '../model/types'

export const add_rooms = async (dto: ContarctAddRoomDto) => {
    return await api.post<ContractType[], ContarctAddRoomDto>('contracts/add-rooms', dto)
}