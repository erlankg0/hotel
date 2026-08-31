import { api } from '@/shared/api';

import type { RequestDto, RequestType } from '../model/types';

export const put = async (id: string, dto: RequestDto & { id: string }) => {
  return await api.put<RequestType, RequestDto>('requests', id, dto);
};