import { api } from '@/shared/api';
import type { AmenityType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<AmenityType>('amenity', id)
}