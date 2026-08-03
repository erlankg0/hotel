import axiosInstance from '@/shared/axios/axios';

import type { OperatorCreateDto , OperatorType } from '../model/types';
import type { BaseResponse } from '@/shared/types/response';

export const post = async (dto: OperatorCreateDto) => {
  return await axiosInstance.post<BaseResponse<OperatorType>>('/operator', dto);
};