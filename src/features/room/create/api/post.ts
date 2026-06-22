import axiosInstance from '@/shared/axios/axios';

import type { RoomDto } from '../../model/dto';

export async function post(dto: RoomDto) {
  return await axiosInstance.post('rooms', dto);
}