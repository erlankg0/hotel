import { api } from '@/shared/api';
import type { RequestType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<RequestType>('request', id)
}