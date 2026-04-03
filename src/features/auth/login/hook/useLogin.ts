'use client';

import { useMutation } from '@tanstack/react-query';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { loginApi } from '../api/login';

import type { LoginDto } from '../model/dto';

export const useLogin = () => {
  return useMutation({
    mutationFn: (dto: LoginDto) => loginApi(dto),
    onError: handleAxiosError,
  });
};