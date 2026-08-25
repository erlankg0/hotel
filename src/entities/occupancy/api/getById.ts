import { api } from '@/shared/api';
import type { OccupancyType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<OccupancyType>('occupancy', id)
}