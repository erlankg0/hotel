import axiosInstance from '@/shared/axios/axios';

import type { AgencyDto } from '../model/schema';

export async function post(dto: AgencyDto) {
  return await axiosInstance.post('agency', dto);
}