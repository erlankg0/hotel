import { Luggage, Tag, GitCommitVertical } from 'lucide-react';
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

import type { AgencyUpdateDto } from '../../model/types';

export function UpdateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AgencyUpdateDto>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Обновления</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'market.id'}>ID Оператора</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('market.id')} disabled id={'market.id'} />
              <InputGroupAddon><GitCommitVertical /></InputGroupAddon>
            </InputGroup>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'market.title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('market.title')} disabled id={'market.title'} />
              <InputGroupAddon><Luggage /></InputGroupAddon>
            </InputGroup>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('title')} placeholder={'Anex-KYRGYZSTAN'} id={'title'} />
              <InputGroupAddon><Luggage /></InputGroupAddon>
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
              <InputGroupInput {...register('shortTitle')} placeholder={'Anex-KGZ'} id={'shortTitle'} />
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