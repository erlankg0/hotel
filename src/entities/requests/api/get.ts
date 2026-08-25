import type { RequestType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';
import { api } from '@/shared/api'

export async function get(params: QueryOptions) {
  return await api.get<RequestType>('request', params)
}