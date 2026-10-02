'use client';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { handleAxiosError } from '@/shared/lib/handleAxiosError';

import { loginApi } from '../api/login';

export const useLogin = () => {

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (response) => {
      const { message } = response;

      toast.success(message || 'С возвращением!');

      window.location.href = '/';
    },

    onError: handleAxiosError,
  });
};