import axiosInstance from '@/shared/axios/axios';

import type { RegisterDto } from '../model/dto';
import type { UserSummary } from '../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function registerApi(dto: RegisterDto): Promise<BaseResponse<UserSummary>> {
  const { data } = await axiosInstance.post<BaseResponse<UserSummary>>('/auth', dto);
  return data;
}