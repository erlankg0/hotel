import { api } from '@/shared/api';

import type { LoginDto } from '../model/dto';
import type { UserSummary } from '../model/type';
import type { BaseResponse } from '@/shared/types/response';

export async function loginApi(
  dto: LoginDto,
): Promise<BaseResponse<UserSummary>> {
  const { data } = await api.post<UserSummary, LoginDto>(
    '/auth/login',
    dto,
  );

  return data;
}
