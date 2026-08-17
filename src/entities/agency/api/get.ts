import axiosInstance from '@/shared/axios/axios';

import type { AgencyType } from '../model/types';
import type { BaseResponse, QueryOptions } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

export const get = async (params: QueryOptions & {
  operatorId?: string
}): Promise<AxiosResponse<BaseResponse<AgencyType[]>>> => {
  return await axiosInstance.get<BaseResponse<AgencyType[]>>('/agency', {
    params: params,
  });
};