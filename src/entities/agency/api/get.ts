import { api } from '@/shared/api';

import type { AgencyType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';


export const get = async (params: QueryOptions & { operatorId?: string }) => {
  return await api.get<AgencyType[]>('agency', params);
};