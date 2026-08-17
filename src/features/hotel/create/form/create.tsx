import { Hotel } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Card, CardContent } from '@/shared/ui/card'
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon,InputGroupTextarea } from '@/shared/ui/input-group';

import type { HotelDto } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelDto>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание Отеля</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('title')} placeholder={'Hotel Name'} id={'title'} />
              <InputGroupAddon><Hotel /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'description'}>Короткое названия</FieldLabel>
            <InputGroup>
              <InputGroupTextarea rows={3} {...register('description')} id={'description'} />
    
            </InputGroup>
            {errors.description ? (
              <FieldError>{errors.description.message}</FieldError>
            ) : (
              <FieldDescription>Введите краткое описания отеля</FieldDescription>
            )}
          </FieldGroup>
        </CardContent>
      </Card>

    </FieldSet>
  );
}