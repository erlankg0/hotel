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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';

import type { RegisterDto } from '../model/dto';

export function RegisterForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterDto>();

  return (
    <FieldSet className="flex flex-col gap-4">
      <header className="mb-1 space-y-1">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Добро пожаловать
        </p>

        <FieldTitle className="text-2xl font-semibold tracking-tight">
          Регистрация
        </FieldTitle>

        <p className="text-sm text-muted-foreground">
          Создайте аккаунт, чтобы продолжить
        </p>
      </header>

      {/* Имя / Фамилия */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FieldGroup>
          <FieldLabel htmlFor="firstName">Имя</FieldLabel>

          <InputGroup>
            <InputGroupInput
              id="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Иван"
              {...register('firstName')}
            />

            <InputGroupAddon>
              <UserSearch size={15} />
            </InputGroupAddon>
          </InputGroup>

          {errors.firstName && (
            <FieldError>{errors.firstName.message}</FieldError>
          )}
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="lastName">Фамилия</FieldLabel>

          <InputGroup>
            <InputGroupInput
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Иванов"
              {...register('lastName')}
            />

            <InputGroupAddon>
              <UserSearch size={15} />
            </InputGroupAddon>
          </InputGroup>

          {errors.lastName && (
            <FieldError>{errors.lastName.message}</FieldError>
          )}
        </FieldGroup>
      </div>

      {/* Email */}
      <FieldGroup>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <InputGroup>
          <InputGroupInput
            id="email"
            type="email"
            autoComplete="email"
            placeholder="example@example.com"
            {...register('email')}
          />

          <InputGroupAddon>
            <LucideMail size={15} />
          </InputGroupAddon>
        </InputGroup>

        {errors.email && (
          <FieldError>{errors.email.message}</FieldError>
        )}
      </FieldGroup>

      {/* Username */}
      <FieldGroup>
        <FieldLabel htmlFor="username">Логин</FieldLabel>

        <InputGroup>
          <InputGroupInput
            id="username"
            type="text"
            autoComplete="username"
            placeholder="ivanov"
            {...register('username')}
          />

          <InputGroupAddon>
            <PiUserThin size={16} />
          </InputGroupAddon>
        </InputGroup>

        {errors.username && (
          <FieldError>{errors.username.message}</FieldError>
        )}
      </FieldGroup>

      {/* Password */}
      <FieldGroup>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="password">Пароль</FieldLabel>

          <span className="text-xs text-muted-foreground">
            минимум 8 символов
          </span>
        </div>

        <InputGroup>
          <InputGroupInput
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            {...register('password')}
          />

          <InputGroupAddon>
            <PiPasswordThin size={16} />
          </InputGroupAddon>
        </InputGroup>

        {errors.password && (
          <FieldError>{errors.password.message}</FieldError>
        )}
      </FieldGroup>

      {/* Login */}
      <FieldDescription className="pt-1 text-center text-sm">
        Уже есть аккаунт?{' '}
        <Link
          href="/login"
          className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Войти
        </Link>
      </FieldDescription>
    </FieldSet>
  );
}