import { api } from '@/shared/api';
import type { QueryOptions } from '@/shared/types/response';
import type { CountryType } from '../model/types';

export const get = async (params: QueryOptions) => {
    return await api.get<CountryType>('country', {
        ...params
    })
}