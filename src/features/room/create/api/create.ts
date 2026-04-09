import axiosInstance from '@/shared/axios/axios';

import type { RoomDto } from '../model/dto';

export async function createApi(dto: RoomDto) {
  return await axiosInstance.post('rooms', dto);
}