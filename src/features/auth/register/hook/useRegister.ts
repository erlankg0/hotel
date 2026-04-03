'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { registerApi } from '../api/register';

import type { RegisterDto } from '../model/dto';

export const useRegister = () => {
  return useMutation({
    mutationFn: (dto: RegisterDto) => registerApi(dto),
    onError: error => {
      toast.error(error.message == 'Network Error' ? 'Ой неизвестная ошибка!' : error.message);
    },
  });
};