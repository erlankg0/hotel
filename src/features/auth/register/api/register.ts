import { api } from '@/shared/api';

import type { RegisterDto } from '../model/dto';
import type { UserSummary } from '../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function registerApi(
  dto: RegisterDto,
): Promise<BaseResponse<UserSummary>> {
  const { data } = await api.post<UserSummary, RegisterDto>(
    '/auth/register',
    dto,
  );

  return data;
}