import type { OperatorType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';
import { api } from '@/shared/api'

export const get = async (params: QueryOptions) => {
  return await api.get<OperatorType>('operator', params)
};