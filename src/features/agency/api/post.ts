import axiosInstance from '@/shared/axios/axios';

import type { AgencyDto, AgencyType } from '../model/types';
import type { BaseResponse } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

export async function post(dto: AgencyDto & { operatorId: string }): Promise<AxiosResponse<BaseResponse<AgencyType>>> {
  return await axiosInstance.post<BaseResponse<AgencyType>>('agency', dto);
}