import { LucideMail, UserSearch } from 'lucide-react';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import { PiPasswordThin, PiUserThin } from 'react-icons/pi';

import {
  FieldSet,
  FieldGroup,
  FieldTitle,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

import type { RegisterDto } from '../model/dto';

export function RegisterForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterDto>();
  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Регистрация</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor={'firstName'}>Имя</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('firstName')} placeholder={'Иван'} />
          <InputGroupAddon>
            <UserSearch size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.firstName && (
          <FieldError>{errors.firstName.message}</FieldError>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'lastName'}>Фамилия</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('lastName')} placeholder={'Иванов'} />
          <InputGroupAddon>
            <UserSearch size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.lastName && (
          <FieldError>{errors.lastName.message}</FieldError>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'email'}>Email</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('email')} placeholder={'example@example.com'} />
          <InputGroupAddon>
            <LucideMail size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.email && (
          <FieldError>{errors.email.message}</FieldError>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'username'}>Логин</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('username')} placeholder={'username'} />
          <InputGroupAddon>
            <PiUserThin size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.username && (
          <FieldError>{errors.username.message}</FieldError>
        )}
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor={'password'}>Пароль</FieldLabel>
        <InputGroup>
          <InputGroupInput type={'password'} placeholder={'Пароль'} {...register('password')} />
          <InputGroupAddon>
            <PiPasswordThin size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.password && (
          <FieldError>{errors.password.message}</FieldError>
        )}
      </FieldGroup>
      <FieldDescription>
        Есть аккаунт? <Link href="/login">Войти</Link>
      </FieldDescription>
    </FieldSet>
  );
}