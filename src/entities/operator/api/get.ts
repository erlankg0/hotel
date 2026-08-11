import axiosInstance from '@/shared/axios/axios';

import type { OperatorType } from '../model/types';
import type { BaseResponse, QueryOptions } from '@/shared/types/response';
import type { AxiosResponse } from 'axios';

export const get = async (params: QueryOptions): Promise<AxiosResponse<BaseResponse<OperatorType[]>>> => {
  return await axiosInstance.get<BaseResponse<OperatorType[]>>('/operator', {
    params: params,
  });
};