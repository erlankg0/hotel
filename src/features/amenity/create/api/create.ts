import axiosInstance from '@/shared/axios/axios';

import type { AmenityType } from '../../model/type';
import type { AmenityDto } from '../model/dto';
import type { BaseResponse } from '@/shared/types/response';

export async function createApi(dto: AmenityDto) {
  return await axiosInstance.post<BaseResponse<AmenityType>>('/amenity', dto);
}