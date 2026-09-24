import { api } from '@/shared/api';

import type {
    RoomCategoryDto,
    RoomCategoryType,
} from '../model/types';

export const put = async (
  id: string,
  dto: Partial<RoomCategoryDto>,
) => {
    return api.put<RoomCategoryType, Partial<RoomCategoryDto>>(
      'room-categories',
      id,
      dto,
    );
};