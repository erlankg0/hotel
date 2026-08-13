import { Luggage } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';
import { Card, CardContent } from '@/shared/ui/card'

import type { AgencyDto } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AgencyDto>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание Оператора</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('title')} placeholder={'Anex-RU'} id={'title'} />
              <InputGroupAddon><Luggage /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'shotTitle'}>Короткое названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('shotTitle')} placeholder={'Anex'} id={'shotTitle'} />
              <InputGroupAddon><Luggage /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
        </CardContent>
      </Card>

    </FieldSet>
  );
}