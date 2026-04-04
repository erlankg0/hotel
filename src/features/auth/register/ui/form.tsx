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
    <FieldSet className="flex flex-col gap-4">
      <article className="mb-2">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Добро пожаловать
        </p>
        <FieldTitle className="text-2xl font-semibold">Регистрация</FieldTitle>
      </article>

      <div className="grid grid-cols-2 gap-3">
        <FieldGroup>
          <FieldLabel htmlFor="firstName">Имя</FieldLabel>
          <InputGroup>
            <InputGroupInput {...register('firstName')} placeholder="Иван" />
            <InputGroupAddon>
              <UserSearch size={14} />
            </InputGroupAddon>
          </InputGroup>
          {errors.firstName && <FieldError>{errors.firstName.message}</FieldError>}
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="lastName">Фамилия</FieldLabel>
          <InputGroup>
            <InputGroupInput {...register('lastName')} placeholder="Иванов" />
            <InputGroupAddon>
              <UserSearch size={14} />
            </InputGroupAddon>
          </InputGroup>
          {errors.lastName && <FieldError>{errors.lastName.message}</FieldError>}
        </FieldGroup>
      </div>

      <FieldGroup>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('email')} placeholder="example@example.com" />
          <InputGroupAddon>
            <LucideMail size={14} />
          </InputGroupAddon>
        </InputGroup>
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor="username">Логин</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('username')} placeholder="username" />
          <InputGroupAddon>
            <PiUserThin size={14} />
          </InputGroupAddon>
        </InputGroup>
        {errors.username && <FieldError>{errors.username.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="password">Пароль</FieldLabel>
          <span className="text-xs text-muted-foreground">мин. 8 символов</span>
        </div>
        <InputGroup>
          <InputGroupInput
            type="password"
            placeholder="••••••••"
            {...register('password')}
          />
          <InputGroupAddon>
            <PiPasswordThin size={14} />
          </InputGroupAddon>
        </InputGroup>
        {errors.password && <FieldError>{errors.password.message}</FieldError>}
      </FieldGroup>

      <FieldDescription className="text-center text-sm text-muted-foreground">
        Уже есть аккаунт?{' '}
        <Link href="/login" className="text-foreground underline underline-offset-2">
          Войти
        </Link>
      </FieldDescription>
    </FieldSet>
  );
}