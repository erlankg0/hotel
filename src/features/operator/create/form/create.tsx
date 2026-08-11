'use client';

import { Luggage } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Card, CardHeader, CardFooter, CardContent, CardTitle } from '@/shared/ui/card';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
  FieldSeparator,
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
    <FieldSet className={'py-8'}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Создание Оператора
          </CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <FieldLabel htmlFor="title">
          Названия
        </FieldLabel>
        <CardContent>
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
        </CardContent>
      </Card>
      <FieldSeparator />

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
      <FieldSeparator />
      <FieldGroup>
        <FieldLabel>Телефоны</FieldLabel>
        <PhoneFieldArray register={register} control={control} path={'phones'} errors={errors} />
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup>
        <FieldLabel>Э-почты</FieldLabel>
        <EmailFieldArray register={register} control={control} path={'emails'} errors={errors} />
      </FieldGroup>
      <FieldSeparator />
    </FieldSet>
  );
}