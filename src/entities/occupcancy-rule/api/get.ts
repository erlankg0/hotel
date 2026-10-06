import { api } from '@/shared/api';
import type { QueryOptions } from '@/shared/types/response';
import type { OccupancyRuleType } from '../model/types';

export const get = async (params: QueryOptions) => {
    return await api.get<OccupancyRuleType>('occupancy-rule', params);
}