import { api } from '@/shared/api'

import type { RequestType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';

export async function get(params: QueryOptions) {
  return await api.get<RequestType>('request', params)
}