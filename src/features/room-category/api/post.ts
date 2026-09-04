import { RoomCategoryDto, RoomCategortType } from '../model/types';
import { api } from '@/shared/api';

export const post = async (dto: RoomCategoryDto) => {
    return await api.post<RoomCategortType, RoomCategoryDto>('room-category', dto);
}