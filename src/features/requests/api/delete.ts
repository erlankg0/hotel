import axiosInstance from '@/shared/axios/axios';

import type { RequestType } from '../model/types';

export async function delete_(id: string): Promise<RequestType> {
  const response = await axiosInstance.delete<RequestType>(`/request/${id}`);

  return response.data;
}