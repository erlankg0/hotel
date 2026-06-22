import axiosInstance from '@/shared/axios/axios';

import type { RoomDto } from '../../model/dto';


export async function put(id: string, dto: Partial<RoomDto>) {
  return await axiosInstance.put(`rooms/${id}`, dto);
}