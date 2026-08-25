import { api } from '@/shared/api';
import type { HotelType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<HotelType>('hotels', id)
}