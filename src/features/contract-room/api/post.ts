import { api } from '@/shared/api';

export const post = async ({ id }: { id: string }) => {
  return await api.post<object, { id: string }>('contract-room/switch', { id: id });
};