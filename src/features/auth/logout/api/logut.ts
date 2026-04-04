import axiosInstance from '@/shared/axios/axios';

export async function logoutApi(): Promise<{ message: string }> {
  const { data } = await axiosInstance.post<{ message: string }>('/auth/logout');
  return data;
}