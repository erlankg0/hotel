import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../../model/type';

export async function deleteApi(id: string) {
  return await axiosInstance.delete<RequestType>('/request/' + id);
}