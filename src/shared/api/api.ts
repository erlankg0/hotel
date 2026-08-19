import axiosInstance from '../axios/axios'

import type { QueryOptions, BaseResponse } from '../types/response'
import type { AxiosResponse } from 'axios'

export const api = {
    get: async <T>(url: string, params?: QueryOptions): Promise<AxiosResponse<BaseResponse<T[]>>> => {
        return axiosInstance.get<BaseResponse<T[]>>(url, {
            params,
        })
    },
    post: async <T, D>(url: string, dto: D): Promise<AxiosResponse<BaseResponse<T>>> => {
        return axiosInstance.post<BaseResponse<T>>(url, dto)
    },
    delete: async <T>(
        url: string,
        id: string,
    ): Promise<AxiosResponse<T>> => {
        return axiosInstance.delete<T>(`${url}/${id}`)
    },
    getById: async <T>(
        url: string,
        id: string,
    ): Promise<AxiosResponse<T>> => {
        return axiosInstance.get<T>(`${url}/${id}`)
    },
}