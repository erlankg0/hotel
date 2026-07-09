import axiosInstance from '@/shared/axios/axios';

import type { RoomType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response'

export async function delete_(id: string) {
  return await axiosInstance.delete<BaseResponse<RoomType>>(`rooms/${id}`);
}