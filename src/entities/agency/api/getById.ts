import { api } from '@/shared/api';
import type { AgencyType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<AgencyType>('agency', id)
}