import axiosInstance from '@/shared/axios/axios';

import type { RoomDto, RoomType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response'


export async function put(id: string, dto: Partial<RoomDto>) {
  return await axiosInstance.put<BaseResponse<RoomType>>(`rooms/${id}`, dto);
}