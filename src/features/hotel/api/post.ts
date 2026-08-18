import { api } from '@/shared/api';
import type { HotelType, HotelDto } from '../model/types';

export const post = async (dto: HotelDto) => {
    return await api.post<HotelType, HotelDto>('hotels', dto)
}