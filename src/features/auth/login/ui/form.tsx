import { LucideMail } from 'lucide-react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

import {
  FieldSet,
  FieldGroup,
  FieldTitle,
  FieldLabel,
  FieldError, FieldDescription,
} from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

import type { LoginDto } from '../model/dto';

export function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginDto>();
  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Авторизация</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor={'email'}>Email</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('email')} placeholder={'example@email.com'} />
          <InputGroupAddon>
            <LucideMail size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.email && (
          <FieldError>{errors.email.message}</FieldError>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'email'}>Пароль</FieldLabel>
        <InputGroup>
          <InputGroupInput type={'password'} placeholder={'Пароль'} {...register('password')} />
          <InputGroupAddon>
            <LucideMail size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.password && (
          <FieldError>{errors.password.message}</FieldError>
        )}
      </FieldGroup>
      <FieldDescription>
        Нет аккаунта? <Link href="/register">Регистрация</Link>
      </FieldDescription>
    </FieldSet>
  );
}