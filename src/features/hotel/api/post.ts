import axiosInstance from "@/shared/axios/axios";
import type { AxiosResponse } from 'axios'
import type { BaseResponse } from '@/shared/types/response'
import type { HotelType, HotelDto } from '../model/types'

export const post = async (dto: HotelDto): Promise<AxiosResponse<BaseResponse<HotelType>>> => {
    return await axiosInstance.post<BaseResponse<HotelType>>('hotel', dto)
}