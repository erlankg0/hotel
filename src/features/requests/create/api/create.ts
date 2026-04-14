import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../../model/type';
import type { RequestDto } from '../model/dto';
import type { BaseResponse } from '@/shared/types/response';

export async function createApi(dto: RequestDto) {
  return await axiosInstance.post<BaseResponse<RequestType>>('/request', dto);
}