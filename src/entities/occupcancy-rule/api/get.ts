import { api } from '@/shared/api';

import type { OccupancyRuleType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
    return await api.get<OccupancyRuleType>('occupancy-rule', params);
}