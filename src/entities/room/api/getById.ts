import axiosInstance from '@/shared/axios/axios';

import type { RoomType } from '../model/type';
import type { AxiosResponse } from 'axios';

export async function getById(id: string): Promise<AxiosResponse<RoomType>> {
  return await axiosInstance.get<RoomType>(`/rooms/${id}`);
}