import axiosInstance from '@/shared/axios/axios';

import type { EmailType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: EmailType) {
  return axiosInstance.post<BaseResponse<EmailType>>('email', {
    ...dto,
  });
}