import { BadgeInfo } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import {
  FieldSet,
  FieldGroup,
  FieldTitle,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

import type { AmenityDto } from '../model/dto';

export function CreateForm() {
  const { register, formState: { errors } } = useFormContext<AmenityDto>();
  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создания нового удобство</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor={'name'}>Названия</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('name')} placeholder={'Wi-Fi'} />
          <InputGroupAddon>
            <BadgeInfo size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.name && (
          <FieldError>{errors.name.message}</FieldError>
        )}
      </FieldGroup>

      <FieldDescription>
        Укажите понятное название удобство
      </FieldDescription>
    </FieldSet>
  );
}