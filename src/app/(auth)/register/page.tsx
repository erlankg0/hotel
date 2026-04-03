'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { RegisterForm, useRegister, RegisterSchema } from '@/features/auth/register';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button/button';

import styles from '../layout.module.scss';

import type { RegisterDto } from '@/features/auth/register';


export default function Page() {
  const { mutate, isPending } = useRegister();
  return (
    <WrapperForm<RegisterDto>
      onSubmit={mutate}
      className={styles.form}
      options={{
        mode: 'onChange',
        resolver: zodResolver(RegisterSchema),
      }}
    >
      <RegisterForm />
      <Button
        disabled={isPending}
        type={'submit'}
        className={styles.button}
      >
        {isPending ? (<span className={styles.loader}><Loader size={14} />Регистарция...</span>) : ('Регистарция')}
      </Button>
    </WrapperForm>
  );
}