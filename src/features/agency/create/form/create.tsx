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
    </FieldSet>
  );
}