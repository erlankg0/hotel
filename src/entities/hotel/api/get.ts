import type { QueryOptions, } from '@/shared/types/response'
import type { HotelType } from '../model/types'
import { api } from '@/shared/api'

export const get = async (params: QueryOptions) => {
    return await api.get<HotelType[]>('hotels', params)
}