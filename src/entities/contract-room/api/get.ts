import { api } from '@/shared/api';
import type { QueryOptions } from '@/shared/types/response';
import type { ContractRoomType } from '../model/types';

export const get = async (params: QueryOptions) => {
    return await api.get<ContractRoomType>('contract-room', params)
}