'use client';

import { Luggage, X, Upload } from 'lucide-react';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/shared/ui/card';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
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
    resetField
  } = useFormContext<OperatorFormInput>();

  const file = watch('file');

  const previewUrl = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  const handleRemoveFile = () => {
    resetField('file');
  };

  return (
    <FieldSet className="py-8">
      <Card className="p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-xl font-bold text-center">
            Создание оператора
          </CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <FieldLabel htmlFor="title">Название</FieldLabel>
            <InputGroup>
              <InputGroupInput
                {...register('title')}
                placeholder="Anex Tour"
                id="title"
                aria-invalid={!!errors.title}
                aria-describedby="title-hint"
              />
              <InputGroupAddon>
                <Luggage className="size-4 text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>

            {errors.title ? (
              <FieldError id="title-hint">{errors.title.message}</FieldError>
            ) : (
              <FieldDescription id="title-hint">
                Введите уникальное название
              </FieldDescription>
            )}
          </FieldGroup>
        </CardContent>
      </Card>

      <FieldSeparator />

      <Card>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <FieldLabel htmlFor="file">Иконка</FieldLabel>

            <div className="flex items-center gap-4">
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Превью иконки оператора"
                    className="size-16 rounded-md border object-cover"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 size-5 rounded-full"
                    onClick={handleRemoveFile}
                    aria-label="Удалить файл"
                  >
                    <X className="size-3" />
                  </Button>
                </div>
              ) : (
                <div className="flex size-16 items-center justify-center rounded-md border border-dashed text-muted-foreground">
                  <Upload className="size-5" />
                </div>
              )}

              <InputGroup className="flex-1">
                <InputGroupInput
                  id="file"
                  type="file"
                  accept="image/*"
                  aria-invalid={!!errors.file}
                  aria-describedby="file-hint"
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
            </div>

            {errors.file ? (
              <FieldError id="file-hint">{errors.file.message}</FieldError>
            ) : (
              <FieldDescription id="file-hint">
                Загрузите изображение оператора (PNG, JPG до 5 МБ)
              </FieldDescription>
            )}

            {file && (
              <p className="truncate text-sm text-muted-foreground">
                Выбран файл: {file.name}
              </p>
            )}
          </FieldGroup>
        </CardContent>
      </Card>

      <FieldSeparator />

      <Card>
        <CardContent className="flex flex-col gap-6">
          <FieldGroup>
            <FieldLabel>Телефоны</FieldLabel>
            <PhoneFieldArray
              register={register}
              control={control}
              path="phones"
              errors={errors}
            />
          </FieldGroup>

          <FieldSeparator />

          <FieldGroup>
            <FieldLabel>Эл. почты</FieldLabel>
            <EmailFieldArray
              register={register}
              control={control}
              path="emails"
              errors={errors}
            />
          </FieldGroup>
        </CardContent>
      </Card>
    </FieldSet>
  );
}