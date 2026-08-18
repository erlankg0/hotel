import { api } from '@/shared/api';
import type { PhoneDto, PhoneType } from '../model/schema';

export async function post(dto: PhoneDto) {
  return await api.post<PhoneType, PhoneDto>('phone', dto);
}