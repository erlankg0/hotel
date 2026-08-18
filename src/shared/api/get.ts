import axiosInstance from '../axios/axios'

import type { AxiosResponse } from 'axios'
import type { QueryOptions, BaseResponse } from '../types/response'

export const getBase = async <T>(
    url: string,
    params?: QueryOptions,
): Promise<AxiosResponse<BaseResponse<T>>> => {
    return axiosInstance.get<BaseResponse<T>>(url, {
        params,
    })
}