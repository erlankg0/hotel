import { api } from '@/shared/api';

import type { ContractDto, ContractType } from '../model/types'

export const post = async (dto: ContractDto) => {
    return await api.post<ContractType, ContractDto>('contact', dto)
}