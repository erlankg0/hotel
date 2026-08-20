import { api } from '@/shared/api';

import type { OccupancyRuleDto, OccupancyRuleType } from '../model/types';

export const post = async (dto: OccupancyRuleDto & { occupancyId: string }) => {
  return await api.post<OccupancyRuleType, OccupancyRuleDto & { occupancyId: string }>('occupancy-rule', {
    ...dto,
    occupancyId: dto.occupancyId,
  });
};