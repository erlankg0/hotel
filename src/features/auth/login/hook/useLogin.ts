'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { loginApi } from '../api/login';

import type { LoginDto } from '../model/dto';

export const useLogin = () => {
  return useMutation({
    mutationFn: (dto: LoginDto) => loginApi(dto),
    onError: error => {
      toast.error(error.message == 'Network Error' ? 'Ой неизвестная ошибка!' : error.message);
    },
  });
};