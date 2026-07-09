import axiosInstance from '@/shared/axios/axios';

import type { RoomDto, RoomType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response'

export async function post(dto: RoomDto) {
  return await axiosInstance.post<BaseResponse<RoomType>>('rooms', dto);
}