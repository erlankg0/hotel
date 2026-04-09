import axiosInstance from '@/shared/axios/axios';

import type { AmenityType } from '../model/type';
import type { BaseResponse, QueryOptions } from '@/shared/types/response';

export async function getApi({ name, limit, page }: QueryOptions) {
  return await axiosInstance.get<BaseResponse<AmenityType[]>>('/amenity', {
    params: {
      name: name,
      limit: limit,
      page: page,
    },
  });
}