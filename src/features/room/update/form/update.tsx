'use client';

import { useFormContext } from 'react-hook-form';

import { categoryOptions } from '@/features/room/const';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/shared/ui/field';
import { InputGroup, InputGroupInput } from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { Text } from '@/shared/ui/text';

import type { RoomCreateFormInput } from '@/features/room';
import type { Category } from '@/features/room/const';


export function UpdateForm() {
  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RoomCreateFormInput>();

  const selectedCategory = watch('category');

  return (
    <section>
      <Text variant={'subtitle'} tag={'h4'}>
        Основная информация
      </Text>
      <Field>
        <FieldLabel>Названия номера</FieldLabel>
        <InputGroup>
          <InputGroupInput placeholder={'Стандартный номер'}></InputGroupInput>
        </InputGroup>
      </Field>
      <FieldGroup>
        <FieldLabel>Категория</FieldLabel>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setValue('category', value as Category, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })}
        >
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
        {errors.category && <FieldError>{errors.category.message}</FieldError>}
      </FieldGroup>

    </section>
  );
}