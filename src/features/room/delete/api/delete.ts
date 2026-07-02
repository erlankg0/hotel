import axiosInstance from '@/shared/axios/axios';

export async function delete_(id: string) {
  return await axiosInstance.delete(`rooms/${id}`);
}