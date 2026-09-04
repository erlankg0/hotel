import { api } from '@/shared/api';

export const remove = async (id: string) => {
    return await api.delete(id, 'room-category');
};