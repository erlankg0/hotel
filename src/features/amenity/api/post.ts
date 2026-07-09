import axiosInstance from '@/shared/axios/axios';

import type { AmenityType, AmenityDto } from "../model/schema" 
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: AmenityDto) {
  return await axiosInstance.post<BaseResponse<AmenityType>>('/amenity', dto);
}