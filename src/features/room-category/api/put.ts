import { api } from '@/shared/api';

import type { RoomCategoryDto, RoomCategoryType } from '../model/types';

export const put = async (id: string, dto: Partial<RoomCategoryDto> & { id: string }) => {
    return await api.put<RoomCategoryType, Partial<RoomCategoryDto> & { id: string }>('room-categories', id, dto);
};