import { api } from '@/shared/api';
import { RoomCategoryDto, RoomCategortType } from '../model/types';

export const put = async (id: string, dto: Partial<RoomCategoryDto> & { id: string }) => {
    return await api.put<RoomCategortType, Partial<RoomCategoryDto> & { id: string }>('room-category', id, dto);
};