
import axiosInstance from '@/shared/axios/axios';

import type { GalleryType } from '../../model/type';
import type { GalleryDto } from '../model/dto';
import type { AxiosResponse } from 'axios';

export function createApi(dto: GalleryDto, roomId: string): Promise<AxiosResponse<GalleryType>> {
  return axiosInstance.post(`gallery/${roomId}`, dto);
}