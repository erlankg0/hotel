import { api } from '@/shared/api';
import type { RequestType, RequestDto } from '../model/schema';

export async function post(dto: RequestDto) {
  return await api.post<RequestType, RequestDto>('/request', dto);
}