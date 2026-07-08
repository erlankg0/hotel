import { User, Phone } from 'lucide-react';
import { useFormContext, Controller } from 'react-hook-form';

import { categoryOptions } from '@/shared/const/category';
import {
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
  FieldSeparator,
  Field,
} from '@/shared/ui/field';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import type { PhoneFormInput } from '../../model/schema';

export function Create() {
  const { register, formState: { errors }, control } = useFormContext<PhoneFormInput>();
  return (
    <FieldSet>
      <FieldLegend>Добавить номер телефона</FieldLegend>
      <FieldSeparator />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={'title'}>Название контакта</FieldLabel>
          <InputGroup>
            <InputGroupInput {...register('title')} placeholder="Имя получателя" />
            <InputGroupAddon>
              <User />
            </InputGroupAddon>
          </InputGroup>
          {errors.title ? (<FieldError>{errors.title?.message}</FieldError>) : (
            <FieldDescription>Добавьте имя получателя</FieldDescription>)}
        </Field>
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor={'phone'}>Номер</FieldLabel>
          <InputGroup>
            <InputGroupInput {...register('phone')} placeholder="+90 242 26 22 22" />
            <InputGroupAddon>
              <Phone />
            </InputGroupAddon>
          </InputGroup>
          {errors.title ? (<FieldError>{errors.title?.message}</FieldError>) : (
            <FieldDescription>Добавьте имя получателя</FieldDescription>)}
        </Field>
      </FieldGroup>
      <FieldSeparator />

      <FieldGroup>
        <FieldLabel>Категория</FieldLabel>
        <Controller
          name={'category'}
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className={'w-full'}>
                <SelectValue placeholder={'Выберите категорию'} />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && <FieldError>{errors.category.message}</FieldError>}
      </FieldGroup>
    </FieldSet>
  );
}