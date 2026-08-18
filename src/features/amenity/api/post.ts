import { api } from '@/shared/api'
import type { AmenityType, AmenityDto } from "../model/schema" 

export async function post(dto: AmenityDto) {
  return await api.post<AmenityType, AmenityDto>('/amenity', dto);
}