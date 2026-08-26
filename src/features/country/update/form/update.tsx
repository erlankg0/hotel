import { FlagIcon, Tag } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Card, CardContent } from '@/shared/ui/card';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';

import type { CountryDto } from '../../model/types';

export function UpdateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CountryDto>();

  return (
    <FieldSet>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('title')} placeholder={'KYRGYZSTAN'} id={'title'} />
              <InputGroupAddon><FlagIcon /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'shortTitle'}>Короткое названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('shortTitle')} placeholder={'KGZ'} id={'shortTitle'} />
              <InputGroupAddon><Tag /></InputGroupAddon>
            </InputGroup>
            {errors.shortTitle ? (
              <FieldError>{errors.shortTitle.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальный код</FieldDescription>
            )}
          </FieldGroup>
        </CardContent>
      </Card>

    </FieldSet>
  );
}