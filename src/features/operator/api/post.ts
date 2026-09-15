import { api } from '@/shared/api';

import type { OperatorCreateDto, OperatorType } from '../model/types';

export const post = async (dto: OperatorCreateDto & { hotelId: string }) => {
  return await api.post<OperatorType, OperatorCreateDto & { hotelId: string }>('/operator', dto);
};