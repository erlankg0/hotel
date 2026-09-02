'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { loginApi } from '../api/login';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (response) => {
      const { data, message } = response;

      queryClient.setQueryData(['session'], data);

      toast.success(message || 'С возвращением!');

      router.push('/');
    },

    onError: handleAxiosError,
  });
};