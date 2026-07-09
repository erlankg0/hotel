import axiosInstance from '@/shared/axios/axios';

import type { AgencyDto, AgencyType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: AgencyDto) {
  return await axiosInstance.post<BaseResponse<AgencyType>>('agency', dto);
}