import axiosInstance from '../axios/axios'

import type { QueryOptions, BaseResponse } from '../types/response'
import type { AxiosResponse } from 'axios'

export const getBase = async <T>(
    url: string,
    params?: QueryOptions,
): Promise<AxiosResponse<BaseResponse<T>>> => {
    return axiosInstance.get<BaseResponse<T>>(url, {
        params,
    })
}