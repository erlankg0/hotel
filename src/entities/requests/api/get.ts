import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../model/type';
import type { QueryOptions, BaseResponse } from '@/shared/types/response';

export async function getApi({ name, page, limit }: QueryOptions): Promise<BaseResponse<RequestType>> {
  return await axiosInstance.get('request', {
    params: {
      name: name,
      page: page,
      limit: limit,
    },
  });
}