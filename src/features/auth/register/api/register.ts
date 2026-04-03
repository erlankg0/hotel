import axiosInstance from '@/shared/axios/axios';

import type { RegisterDto } from '../model/dto';
import type { User } from '../model/type';

export function registerApi(dto: RegisterDto) {
  return axiosInstance.post<User>('/auth', dto);
}