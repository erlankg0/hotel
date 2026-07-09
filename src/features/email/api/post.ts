import axiosInstance from '@/shared/axios/axios';

import type { EmailDto, EmailType } from '../model/schema';
import type { BaseResponse } from '@/shared/types/response';

export async function post(dto: EmailDto) {
  return axiosInstance.post<BaseResponse<EmailType>>('email', {
    ...dto,
  });
}