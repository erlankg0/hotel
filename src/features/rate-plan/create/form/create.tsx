'use client';

import { FileCode2, Hash, RefreshCcw, ToggleLeft } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';


import { Card, CardContent } from '@/shared/ui/card';
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
import { Switch } from '@/shared/ui/switch';

import type { RatePlanFromInput } from '../../model/types';

export function CreateForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<RatePlanFromInput>();

  return (
    <FieldSet className="mx-auto w-full">
      <div className="mb-6 space-y-1">
        <FieldTitle className="text-2xl font-semibold tracking-tight">
          Создание тарифа
        </FieldTitle>

        <p className="text-sm text-muted-foreground">
          Заполните основные параметры тарифного плана.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">
                Основная информация
              </h2>

              <p className="text-sm text-muted-foreground">
                Название и код тарифного плана.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Название */}
              <FieldGroup>
                <FieldLabel htmlFor="title">
                  Название
                </FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    id="title"
                    {...register('title')}
                    placeholder="Например: Best Available Rate"
                  />

                  <InputGroupAddon>
                    <FileCode2 />
                  </InputGroupAddon>
                </InputGroup>

                {errors.title ? (
                  <FieldError>
                    {errors.title.message}
                  </FieldError>
                ) : (
                  <FieldDescription>
                    Название тарифного плана.
                  </FieldDescription>
                )}
              </FieldGroup>

              {/* Код */}
              <FieldGroup>
                <FieldLabel htmlFor="code">
                  Код
                </FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    id="code"
                    {...register('code')}
                    placeholder="Например: BAR"
                  />

                  <InputGroupAddon>
                    <Hash />
                  </InputGroupAddon>
                </InputGroup>

                {errors.code ? (
                  <FieldError>
                    {errors.code.message}
                  </FieldError>
                ) : (
                  <FieldDescription>
                    Уникальный код тарифа в рамках контракта.
                  </FieldDescription>
                )}
              </FieldGroup>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">
                Настройки тарифа
              </h2>

              <p className="text-sm text-muted-foreground">
                Управление возвратностью и активностью тарифа.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Возвратный */}
              <Controller
                control={control}
                name="isRefundable"
                render={({ field, fieldState }) => (
                  <FieldGroup>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                          <RefreshCcw className="size-4" />
                        </div>

                        <div className="space-y-0.5">
                          <FieldLabel htmlFor="isRefundable">
                            Возвратный тариф
                          </FieldLabel>

                          <FieldDescription>
                            Разрешён ли возврат бронирования.
                          </FieldDescription>
                        </div>
                      </div>

                      <Switch
                        id="isRefundable"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>

                    {fieldState.error && (
                      <FieldError>
                        {fieldState.error.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                )}
              />

              {/* Активный */}
              <Controller
                control={control}
                name="isActive"
                render={({ field, fieldState }) => (
                  <FieldGroup>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-md bg-muted">
                          <ToggleLeft className="size-4" />
                        </div>

                        <div className="space-y-0.5">
                          <FieldLabel htmlFor="isActive">
                            Активный
                          </FieldLabel>

                          <FieldDescription>
                            Тариф доступен для использования.
                          </FieldDescription>
                        </div>
                      </div>

                      <Switch
                        id="isActive"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>

                    {fieldState.error && (
                      <FieldError>
                        {fieldState.error.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">
                Приоритет
              </h2>

              <p className="text-sm text-muted-foreground">
                Приоритет используется для определения порядка тарифов.
              </p>
            </div>

            <FieldGroup className="max-w-sm">
              <FieldLabel htmlFor="priority">
                Приоритет
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="priority"
                  type="number"
                  {...register('priority', {
                    valueAsNumber: true,
                  })}
                  placeholder="0"
                />

                <InputGroupAddon>
                  <Hash />
                </InputGroupAddon>
              </InputGroup>

              {errors.priority ? (
                <FieldError>
                  {errors.priority.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Чем выше значение, тем выше приоритет тарифа.
                </FieldDescription>
              )}
            </FieldGroup>
          </CardContent>
        </Card>
      </div>
    </FieldSet>
  );
}