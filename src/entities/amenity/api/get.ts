import type { AmenityType } from '../model/types';
import type { QueryOptions } from '@/shared/types/response';
import { api } from '@/shared/api'

export const get = async (params: QueryOptions) => {
  return await api.get<AmenityType>('amenity', params)
}