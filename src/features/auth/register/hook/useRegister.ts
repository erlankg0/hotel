'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { registerApi } from '../api/register';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: registerApi,

    onError: handleAxiosError,

    onSuccess: (response) => {
      const { data, message } = response;

      queryClient.setQueryData(['session'], data);

      toast.success(
        message || 'Успешная регистрация пользователя!',
      );

      router.push('/');
    },
  });
};