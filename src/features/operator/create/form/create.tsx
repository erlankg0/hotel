'use client';

import { Luggage } from 'lucide-react';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';

import { Category, contactCategories } from '@/shared/const/category';
import { Button } from '@/shared/ui/button';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
  FieldContent,
} from '@/shared/ui/field';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import type { OperatorFormInput } from '../../model/types';

export function Create() {
  const {
    register,
    setValue,
    formState: { errors },
    control,
    watch,
  } = useFormContext<OperatorFormInput>();

  const {
    fields: phonesFields,
    append: phoneAppend,
    remove: phoneRemove,
  } = useFieldArray({
    name: 'phones',
    control,
  });

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
        <FieldLabel>
          Телефоны
        </FieldLabel>

        <div className="flex flex-col gap-4">

          {phonesFields.map((field, index) => (
            <FieldContent
              key={field.id}
              className={'rounded-lg border p-4 space-y-3'}
            >
              <FieldLabel>
                Телефон + {index + 1}
              </FieldLabel>
              <div>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent className={'w-full min-w-1/2'}>
                        {contactCategories.map(cat => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  name={`phones.${index}.category`} />
                <div>
                  <FieldLabel>
                    Название
                  </FieldLabel>

                  <InputGroup>
                    <InputGroupInput
                      {...register(`phones.${index}.title`)}
                      placeholder="Sales Department"
                    />
                  </InputGroup>

                  {errors.phones?.[index]?.title && (
                    <FieldError>
                      {errors.phones[index]?.title?.message}
                    </FieldError>
                  )}
                </div>
              </div>

            </FieldContent>
          ))}


          <Button
            type="button"
            onClick={() =>
              phoneAppend({
                title: '',
                phone: '',
                category: Category.GENERAL,
              })
            }
            className="
        h-10
        rounded-md
        border
        border-dashed
        hover:bg-gray-100
      "
          >
            + Добавить телефон
          </Button>

        </div>
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Э-почты</FieldLabel>
      </FieldGroup>

    </FieldSet>
  );
}