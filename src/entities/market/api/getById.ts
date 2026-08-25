import { api } from '@/shared/api';

import type { MarketType } from '../model/types';

export const getById = async (id: string) => {
  return await api.getById<MarketType>(`/market`, id);
};