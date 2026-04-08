import axiosInstance from '@/shared/axios/axios';

import type { AmenityType } from '../../model/type';

export async function deleteApi(id: string) {
  return await axiosInstance.delete<AmenityType>('/amenity/' + id);
}