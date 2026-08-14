import axiosInstance from '@/shared/axios/axios';

import type { AmenityType } from '../model/types';
import type { BaseResponse, QueryOptions } from '@/shared/types/response';

export async function get(params: QueryOptions) {
  return await axiosInstance.get<BaseResponse<AmenityType[]>>('/amenity', {
    params: {
      ...params,
    },
  });
}