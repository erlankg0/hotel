import axiosInstance from '@/shared/axios/axios';

import type { AmenityType } from '../model/type';
import type { BaseResponse, QueryOptions } from '@/shared/types/response';

export async function getApi({ name, limit, page }: QueryOptions): Promise<BaseResponse<AmenityType>> {
  return await axiosInstance.get('/amenity', {
    params: {
      name: name,
      limit: limit,
      page: page,
    },
  });
}