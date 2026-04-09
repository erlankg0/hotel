import axiosInstance from '@/shared/axios/axios';

export async function createApi() {
  return await axiosInstance.post('rooms');
}