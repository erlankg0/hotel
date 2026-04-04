import axiosInstance from '@/shared/axios/axios';

import type { UserSummary } from '../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function getMeApi(): Promise<BaseResponse<UserSummary>> {
  const { data } = await axiosInstance.get<BaseResponse<UserSummary>>('/auth/me');
  return data;
}