import { api } from '@/shared/api';

import type { ContractPeriodType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export const get = async (params: QueryOptions) => {
  return await api.get<ContractPeriodType>(`contract-period/contract/${params.id}`, params);
};