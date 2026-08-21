import { api } from '@/shared/api';

import type { MarketDto, MarketType } from '../model/types';

export const post = async (dto: MarketDto) => {
  return await api.post<MarketType, MarketDto>('/market', dto);
};