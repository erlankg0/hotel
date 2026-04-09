'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { useAmenity } from '@/entities/amenity';
import { useRequest } from '@/entities/requests';
import { Dropzone } from '@/shared/ui/dropzone';
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

import { Category } from '../model/dto';

import type { RoomCreateFormInput } from '../model/dto';

const categoryOptions = [
  { label: 'Номер', value: Category.ROOM },
  { label: 'Сьют', value: Category.SUIT },
  { label: 'Вилла', value: Category.VILLA },
];

export function CreateForm() {
  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RoomCreateFormInput>();
  const { data: amenities, isLoading: isAmenitiesLoading } = useAmenity();
  const { data: requests, isLoading: isRequestsLoading } = useRequest();

  const selectedAmenityIds = watch('amenityIds');
  const selectedRequestsIds = watch('requestsIds');
  const selectedFiles = watch('files');
  const selectedCategory = watch('category');
  const uai = watch('uai');

  const photoNames = useMemo(() => {
    return selectedFiles?.map(file => file.name) ?? [];
  }, [selectedFiles]);

  function toggleArrayValue(field: 'amenityIds' | 'requestsIds', value: string) {
    const previousValues = getValues(field) ?? [];
    const nextValues = previousValues.includes(value)
      ? previousValues.filter(item => item !== value)
      : [...previousValues, value];

    setValue(field, nextValues, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }

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

        <FieldGroup>
          <FieldLabel htmlFor={'uai'}>UAI</FieldLabel>
          <label
            className={'flex h-9 items-center gap-3 rounded-md border border-input px-3 text-sm'}
            htmlFor={'uai'}
          >
            <input
              id={'uai'}
              type={'checkbox'}
              checked={uai}
              onChange={(event) => setValue('uai', event.target.checked, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              })}
            />
            Ультра всё включено
          </label>
          {errors.uai && <FieldError>{errors.uai.message}</FieldError>}
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

      <FieldGroup>
        <FieldLabel>Фотографии номера</FieldLabel>
        <Dropzone
          onFilesSelected={(acceptedFiles) => {
            const previousFiles = getValues('files') ?? [];

            setValue('files', [...previousFiles, ...acceptedFiles], {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          }}
          options={{
            accept: {
              'image/*': [],
            },
            maxFiles: 20,
          }}
          placeholder={'Добавьте фотографии номера'}
        />
        {errors.files && <FieldError>{errors.files.message}</FieldError>}
        {photoNames.length ? (
          <FieldDescription>Выбрано фото: {photoNames.join(', ')}</FieldDescription>
        ) : (
          <FieldDescription>Фотографии загрузятся только после нажатия кнопки сохранения.</FieldDescription>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Удобства</FieldLabel>
        <div className={'flex flex-wrap gap-2'}>
          {amenities?.map(item => {
            const isSelected = selectedAmenityIds?.includes(item.id);

            return (
              <button
                key={item.id}
                type={'button'}
                className={`rounded-md border px-3 py-2 text-sm transition-colors ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-input'}`}
                onClick={() => toggleArrayValue('amenityIds', item.id)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {isAmenitiesLoading && <FieldDescription>Загрузка удобств...</FieldDescription>}
        {!amenities?.length && !isAmenitiesLoading && (
          <FieldDescription>Сначала создайте хотя бы одно удобство.</FieldDescription>
        )}
        {errors.amenityIds && <FieldError>{errors.amenityIds.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Запросы</FieldLabel>
        <div className={'flex flex-wrap gap-2'}>
          {requests?.map(item => {
            const isSelected = selectedRequestsIds?.includes(item.id);

            return (
              <button
                key={item.id}
                type={'button'}
                className={`rounded-md border px-3 py-2 text-sm transition-colors ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-input'}`}
                onClick={() => toggleArrayValue('requestsIds', item.id)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {isRequestsLoading && <FieldDescription>Загрузка запросов...</FieldDescription>}
        {!requests?.length && !isRequestsLoading && (
          <FieldDescription>Сначала создайте хотя бы один запрос.</FieldDescription>
        )}
        {errors.requestsIds && <FieldError>{errors.requestsIds.message}</FieldError>}
      </FieldGroup>
    </FieldSet>
  );
}
