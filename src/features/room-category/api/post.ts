import { api } from '@/shared/api';

import type { RoomCategoryDto, RoomCategoryType } from '../model/types';


export const post = async (dto: RoomCategoryDto) => {
    return await api.post<RoomCategoryType, RoomCategoryDto>('room-categories', dto);
}