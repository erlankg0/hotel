import { api } from '@/shared/api';

import type { ContractRoomType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
    return await api.get<ContractRoomType>('contract-room', params)
}