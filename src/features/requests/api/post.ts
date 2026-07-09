import axiosInstance from '@/shared/axios/axios';

import type { RequestType, RequestDto } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: RequestDto) {
  return await axiosInstance.post<BaseResponse<RequestType>>('/request', dto);
}