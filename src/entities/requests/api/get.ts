import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../model/type';
import type { QueryOptions, BaseResponse } from '@/shared/types/response';

export async function getApi({ name, page, limit }: QueryOptions) {
  return await axiosInstance.get<BaseResponse<RequestType[]>>('request', {
    params: {
      name: name,
      page: page,
      limit: limit,
    },
  });
}