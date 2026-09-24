import { api } from '@/shared/api';

import type { HotelType } from '../model/types';

export const remove = async (id: string,) => {
    return await api.delete<HotelType>('hotels', id);
};