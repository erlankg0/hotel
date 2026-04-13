import axiosInstance from '@/shared/axios/axios';

import type { QueryOptions } from '@/shared/types/response';

export async function get(params: QueryOptions) {
  return await axiosInstance.get('/rooms', {
    params: {
      ...params,
    },
  });
}