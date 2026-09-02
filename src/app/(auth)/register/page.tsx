'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { RegisterForm, useRegister, RegisterSchema } from '@/features/auth/register';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button/button';

import styles from '../layout.module.scss';

import type { RegisterDto } from '@/features/auth/register';


export default function Page() {
  const { mutate, isPending } = useRegister();
  return (
    <WrapperForm<RegisterDto>
      onSubmit={(data) => mutate(data)}
      className={styles.form}
      options={{
        mode: 'onChange',
        resolver: zodResolver(RegisterSchema),
      }}
    >
      <RegisterForm />
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
          <span>{isPending ? '...' : 'Регистрация'}</span>
        </p>
      </Button>
    </WrapperForm>
  );
}