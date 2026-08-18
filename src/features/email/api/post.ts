import { api } from '@/shared/api';
import type { EmailDto, EmailType } from '../model/schema';

export async function post(dto: EmailDto) {
  return api.post<EmailType, EmailDto>('email', dto);
}