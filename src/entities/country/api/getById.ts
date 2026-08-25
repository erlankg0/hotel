import { api } from '@/shared/api';
import type { CountryType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<CountryType>('country', id)
}