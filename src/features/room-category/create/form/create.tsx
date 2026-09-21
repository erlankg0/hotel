'use client';

import { ChartBarStacked, Tag, Layers3 } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

import { categorySectionOptions } from '@/shared/const/room-category';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import type { RoomCategoryFormInput } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<RoomCategoryFormInput>();

  return (
    <FieldSet className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
            <Layers3 className="size-4 text-muted-foreground" />
          </div>

          <div>
            <FieldTitle className="text-lg font-semibold tracking-tight">
              Создание категории номера
            </FieldTitle>

            <p className="text-sm text-muted-foreground">
              Добавьте категорию, которая будет использоваться в отеле и контрактах.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FieldGroup>
          <FieldLabel htmlFor="title">
            Название категории
          </FieldLabel>

          <InputGroup>
            <InputGroupInput
              id="title"
              placeholder="Например, Standard Room"
              autoComplete="off"
              {...register('title')}
            />

            <InputGroupAddon>
              <ChartBarStacked />
            </InputGroupAddon>
          </InputGroup>

          <FieldDescription>
            Полное название категории номера.
          </FieldDescription>

          {errors.title && (
            <FieldError>
              {errors.title.message}
            </FieldError>
          )}
        </FieldGroup>

        <FieldGroup>
          <FieldLabel htmlFor="shortTitle">
            Код категории
          </FieldLabel>

          <InputGroup>
            <InputGroupInput
              id="shortTitle"
              placeholder="STD"
              autoComplete="off"
              {...register('shortTitle')}
            />

            <InputGroupAddon>
              <Tag />
            </InputGroupAddon>
          </InputGroup>

          <FieldDescription>
            Короткий код для таблиц, контрактов и отчетов.
          </FieldDescription>

          {errors.shortTitle && (
            <FieldError>
              {errors.shortTitle.message}
            </FieldError>
          )}
        </FieldGroup>
      </div>

      <Controller
        control={control}
        name="categorySection"
        render={({ field, fieldState }) => (
          <FieldGroup>
            <FieldLabel>
              Секция категории
            </FieldLabel>

            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                className="w-full"
                aria-invalid={fieldState.invalid}
              >
                <SelectValue placeholder="Выберите секцию" />
              </SelectTrigger>

              <SelectContent>
                {categorySectionOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FieldDescription>
              Определяет, к какой секции отеля относится категория.
            </FieldDescription>

            {fieldState.error && (
              <FieldError>
                {fieldState.error.message}
              </FieldError>
            )}
          </FieldGroup>
        )}
      />
    </FieldSet>
  );
}