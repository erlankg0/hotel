'use client';

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
import { PhoneFieldArray, EmailFieldArray } from '@/shared/ui/field-array';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/shared/ui/input-group';

import type { OperatorFormInput } from '../../model/types';

export function Create() {
  const {
    register,
    setValue,
    formState: { errors },
    control,
    watch,
  } = useFormContext<OperatorFormInput>();

  const file = watch('file');

  return (
    <FieldSet>
      <article>
        <FieldTitle className="text-xl font-bold text-center">
          Создание Оператора
        </FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel htmlFor="title">
          Title
        </FieldLabel>

        <InputGroup>
          <InputGroupInput
            {...register('title')}
            placeholder="anex Tour"
            id="title"
          />

          <InputGroupAddon>
            <Luggage />
          </InputGroupAddon>
        </InputGroup>

        {errors.title ? (
          <FieldError>
            {errors.title.message}
          </FieldError>
        ) : (
          <FieldDescription>
            Введите уникальное название
          </FieldDescription>
        )}
      </FieldGroup>


      <FieldGroup>
        <FieldLabel htmlFor="file">
          Иконка
        </FieldLabel>

        <InputGroup>
          <InputGroupInput
            id="file"
            type="file"
            accept="image/*"
            onChange={(event) => {
              const selectedFile = event.target.files?.[0];

              if (selectedFile) {
                setValue('file', selectedFile, {
                  shouldValidate: true,
                });
              }
            }}
          />
        </InputGroup>


        {errors.file ? (
          <FieldError>
            {errors.file.message}
          </FieldError>
        ) : (
          <FieldDescription>
            Загрузите изображение оператора
          </FieldDescription>
        )}


        {file && (
          <p className="text-sm mt-2">
            Выбран файл: {file.name}
          </p>
        )}

      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Телефоны</FieldLabel>
        <PhoneFieldArray register={register} control={control} path={'phones'} errors={errors} />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Э-почты</FieldLabel>
        <EmailFieldArray register={register} control={control} path={'emails'} errors={errors} />
      </FieldGroup>

    </FieldSet>
  );
}