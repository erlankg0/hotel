'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { registerApi } from '../api/register';

import type { RegisterDto } from '../model/dto';

export const useRegister = () => {
  return useMutation({
    mutationFn: (dto: RegisterDto) => registerApi(dto),
    onError: handleAxiosError,
    onSuccess: async () => {
      toast.success('Успешная регистарция пользователя!');
    },
  });
};