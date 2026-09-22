import { api } from '@/shared/api';

import type { HotelType } from '../model/types';

export const getAll = async () => {
  return await api.get<HotelType>('hotels/all');
};