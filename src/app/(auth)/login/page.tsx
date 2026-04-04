'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { LoginForm, useLogin, LoginSchema } from '@/features/auth/login';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button/button';

import styles from '../layout.module.scss';

import type { LoginDto } from '@/features/auth/login';


export default function Page() {
  const { mutate, isPending } = useLogin();
  return (
    <WrapperForm<LoginDto>
      onSubmit={mutate}
      className={styles.form}
      options={{
        mode: 'onChange',
        resolver: zodResolver(LoginSchema),
      }}
    >
      <LoginForm />
      <Button
        disabled={isPending}
        type={'submit'}
        className={styles.button}
      >
        {isPending ? (<span className={styles.loader}><Loader size={14} />Вход...</span>) : ('Войти')}
      </Button>
    </WrapperForm>
  );
}