import axiosInstance from '../../axios/axios';

import type { FileType } from './type';
import type { AxiosResponse } from 'axios';

export async function uploadFileApi(file: File): Promise<FileType> {

  const formData = new FormData();
  formData.append('file', file);

  const response: AxiosResponse<FileType> = await axiosInstance.post('files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}