'use client';
import { ChartBarStacked, Tag } from 'lucide-react';

import { useFormContext } from 'react-hook-form';
import {
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import { CategorySection, categorySectionOptions } from '@/shared/const/room-category';
import type { RoomCategoryFormInput } from '../../model/types';


export function UpdateForm() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RoomCategoryFormInput>();

  const selectedCategory = watch('categorySection');

  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание категории номера</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor={'title'}>Название категории</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('title')} id='title' />
          <InputGroupAddon><ChartBarStacked /></InputGroupAddon>
        </InputGroup>
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'shortTitle'}>Код категории</FieldLabel>
        <InputGroup>
          <InputGroupInput id={'shortTitle'} {...register('shortTitle')} />
          <InputGroupAddon><Tag /></InputGroupAddon>
        </InputGroup>
        {errors.shortTitle && <FieldError>{errors.shortTitle.message}</FieldError>}
      </FieldGroup>

      <div className={'grid gap-4 md:grid-cols-2'}>
        <FieldGroup>
          <FieldLabel>Секция категории</FieldLabel>
          <Select
            value={selectedCategory}
            onValueChange={(value) => setValue('categorySection', value as CategorySection, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            })}
          >
            <SelectTrigger className={'w-full'}>
              <SelectValue placeholder={'Выберите категорию'} />
            </SelectTrigger>
            <SelectContent>
              {categorySectionOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.categorySection && <FieldError>{errors.categorySection.message}</FieldError>}
        </FieldGroup>
      </div>
    </FieldSet>
  );
}
