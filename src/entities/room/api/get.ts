import axiosInstance from '@/shared/axios/axios';

import type { RoomType } from '../model/type';
import type { QueryOptions, BaseResponse } from '@/shared/types/response';

export async function get(params: QueryOptions) {
  return await axiosInstance.get<BaseResponse<RoomType[]>>('/rooms', {
    params: {
      ...params,
    },
  });
}