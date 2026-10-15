import { api } from '@/shared/api';

import type { OccupancyRuleType } from '../model/types';

export const getById = async (id: string) => {
    return await api.getById<OccupancyRuleType>('occupancy-rule', id);
}