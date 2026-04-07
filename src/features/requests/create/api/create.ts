import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function createApi() {
  return await axiosInstance.post<BaseResponse<RequestType>>('/request');
}