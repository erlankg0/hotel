import { api } from '@/shared/api';
import type { OperatorType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<OperatorType>('operator', id)
}