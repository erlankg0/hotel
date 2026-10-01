import { api } from '@/shared/api';

export const post = async (id: string) => {
    return await api.post<{}, { id: string }>('contract-room/switch', { id: id })
}