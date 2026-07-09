import axiosInstance from '@/shared/axios/axios';

import type { PhoneDto, PhoneType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: PhoneDto) {
  return await axiosInstance.post<BaseResponse<PhoneType>>('phone', dto);
}