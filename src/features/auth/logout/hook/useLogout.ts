'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { logoutApi } from '../api/logut';

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: logoutApi,
    onError: handleAxiosError,
    onSuccess: async (data) => {
      queryClient.clear();
      const title = data.message;
      toast.info(title || 'Пользователь успешно вышел из аккаунта');
      router.push('/');
    },
  });
}