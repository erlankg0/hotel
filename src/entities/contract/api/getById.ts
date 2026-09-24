import { api } from '@/shared/api';

import type { ContractType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<ContractType>('contracts', id)
}