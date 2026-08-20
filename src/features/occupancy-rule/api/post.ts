import { api } from '@/shared/api';

import type { OccupancyRuleDto, OccupancyRuleType } from '../model/types';

export const post = async (dto: OccupancyRuleDto) => {
  return await api.post<OccupancyRuleType, OccupancyRuleDto>('occupancy-rule', dto);
};