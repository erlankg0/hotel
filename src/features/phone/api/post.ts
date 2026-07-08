import axiosInstance from '@/shared/axios/axios';

import type { PhoneDto } from '../model/schema';

export async function post(dto: PhoneDto) {
  return await axiosInstance.post('phone', dto);
}