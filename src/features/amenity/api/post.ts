import axiosInstance from '@/shared/axios/axios';

import type { AmenityDto } from '../create/model/dto';
import type { AmenityType } from '../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: AmenityDto) {
  return await axiosInstance.post<BaseResponse<AmenityType>>('/amenity', dto);
}