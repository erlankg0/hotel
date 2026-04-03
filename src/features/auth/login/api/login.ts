import axiosInstance from '@/shared/axios/axios';

import type { LoginDto } from '../model/dto';

export function loginApi(dto: LoginDto) {
  return axiosInstance.post<LoginDto>('/auth/login', dto);
}