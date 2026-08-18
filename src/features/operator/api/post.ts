import { api } from '@/shared/api';
import type { OperatorCreateDto, OperatorType } from '../model/types';

export const post = async (dto: OperatorCreateDto) => {
  return await api.post<OperatorType, OperatorCreateDto>('/operator', dto);
};