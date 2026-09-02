'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { LoginForm, useLogin, LoginSchema } from '@/features/auth/login';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button/button';

import styles from '../layout.module.scss';

import type { LoginDto } from '@/features/auth/login';


export default function Page() {
  const { mutate, isPending } = useLogin();
  return (
    <WrapperForm<LoginDto>
      onSubmit={(data) => mutate(data)}
      className={styles.form}
      options={{
        mode: 'onChange',
        resolver: zodResolver(LoginSchema),
      }}
    >
      <LoginForm />
      <Button
        disabled={isPending}
        type="submit"
        className="relative w-full"
      >
        <p
          className={`flex items-center justify-center gap-2 transition-all duration-200 ${
            isPending ? 'opacity-100' : 'opacity-100'
          }`}
        >
          {isPending && <Loader2 className="size-4 animate-spin" />}
          <span>{isPending ? 'Вход...' : 'Войти'}</span>
        </p>
      </Button>
    </WrapperForm>
  );
}