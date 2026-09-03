'use client';

import { useFormContext } from 'react-hook-form';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Textarea } from '@/shared/ui/textarea';

import { CategorySection, categorySectionOptions } from '@/shared/const/room-category';
import type { RoomCategoryFormInput } from '../../model/types';


export function CreateForm() {
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
        <FieldTitle className={'text-xl font-bold text-center'}>Создание нового номера</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor={'title'}>Название номера</FieldLabel>
        <Input id={'title'} {...register('title')} placeholder={'Deluxe Sea View'} />
        {errors.title && <FieldError>{errors.title.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'description'}>Описание</FieldLabel>
        <Textarea
          id={'description'}
          {...register('description')}
          placeholder={'Подробное описание номера'}
        />
        {errors.description && <FieldError>{errors.description.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'subDescription'}>Короткое описание</FieldLabel>
        <Textarea
          id={'subDescription'}
          {...register('subDescription')}
          placeholder={'Короткий акцент для карточки номера'}
        />
        {errors.subDescription && <FieldError>{errors.subDescription.message}</FieldError>}
      </FieldGroup>

      <div className={'grid gap-4 md:grid-cols-2'}>
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
      </div>

      <div className={'grid gap-4 md:grid-cols-3'}>
        <FieldGroup>
          <FieldLabel htmlFor={'capacity'}>Вместимость</FieldLabel>
          <Input
            id={'capacity'}
            type={'number'}
            min={1}
            {...register('capacity', { valueAsNumber: true })}
          />
          {errors.capacity && <FieldError>{errors.capacity.message}</FieldError>}
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor={'bedRoomCount'}>Спален</FieldLabel>
          <Input
            id={'bedRoomCount'}
            type={'number'}
            min={1}
            {...register('bedRoomCount', { valueAsNumber: true })}
          />
          {errors.bedRoomCount && <FieldError>{errors.bedRoomCount.message}</FieldError>}
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor={'bathRoomCount'}>Ванных</FieldLabel>
          <Input
            id={'bathRoomCount'}
            type={'number'}
            min={1}
            {...register('bathRoomCount', { valueAsNumber: true })}
          />
          {errors.bathRoomCount && <FieldError>{errors.bathRoomCount.message}</FieldError>}
        </FieldGroup>
      </div>

    </FieldSet>
  );
}
