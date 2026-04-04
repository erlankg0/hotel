'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { registerApi } from '../api/register';

import type { RegisterDto } from '../model/dto';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (dto: RegisterDto) => registerApi(dto),
    onError: handleAxiosError,
    onSuccess: async (response) => {
      const { data, message } = response;
      const welcomeMessage = message || 'Успешная регистрация пользователя!';
      await queryClient.setQueryData(['session'], data);
      toast.success(welcomeMessage);
      router.push('/');
    },
  });
};