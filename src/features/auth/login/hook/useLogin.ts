'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { loginApi } from '../api/login';

import type { LoginDto } from '../model/dto';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (dto: LoginDto) => loginApi(dto),
    onSuccess: async (response) => {
      const { data, message } = response;
      const welcomeMessage = message || 'С возвращением!';
      await queryClient.setQueryData(['session'], data);
      toast.success(welcomeMessage);
      router.push('/');
    },
    onError: handleAxiosError,
  });
};