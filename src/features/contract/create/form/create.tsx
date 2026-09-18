import { CalendarDays, Coins, FileText } from 'lucide-react';
import Link from 'next/link';
import { Controller, useFormContext } from 'react-hook-form';

import {
  BoardType,
  ContractStatus,
  Currency,
  boardTypeLabels,
  contractStatusLabels,
  currencyLabels,
} from '@/shared/const/enums';
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
import { MultiSelect } from '@/shared/ui/multi-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import type { ContractFormInput } from '../../model/types';
import type { Props } from '@/shared/types/types';

export function CreateForm({
  search,
  setSearch,
  data,
  isLoading,
  page,
  setPage,
  total,
}: Props) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<ContractFormInput>();

  return (
    <FieldSet className="mx-auto w-full">
      <div className="mb-6 space-y-1">
        <FieldTitle className="text-2xl font-semibold tracking-tight">
          Создание контракта
        </FieldTitle>

        <p className="text-sm text-muted-foreground">
          Заполните основные параметры, периоды действия и рынки контракта.
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
                Основные параметры договора.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FieldGroup className="md:col-span-2">
                <FieldLabel htmlFor="title">
                  Название
                </FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    id="title"
                    {...register('title')}
                    placeholder="Например: Summer 2026"
                  />

                  <InputGroupAddon>
                    <FileText />
                  </InputGroupAddon>
                </InputGroup>

                {errors.title ? (
                  <FieldError>
                    {errors.title.message}
                  </FieldError>
                ) : (
                  <FieldDescription>
                    Введите название контракта.
                  </FieldDescription>
                )}
              </FieldGroup>

              <Controller
                control={control}
                name="status"
                render={({ field, fieldState }) => (
                  <FieldGroup>
                    <FieldLabel htmlFor="status">
                      Статус
                    </FieldLabel>

                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger id="status" className="w-full">
                        <SelectValue placeholder="Выберите статус" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={ContractStatus.DRAFT}>
                          {contractStatusLabels[ContractStatus.DRAFT]}
                        </SelectItem>

                        <SelectItem value={ContractStatus.ACTIVE}>
                          {contractStatusLabels[ContractStatus.ACTIVE]}

                        </SelectItem>

                        <SelectItem value={ContractStatus.SUSPENDED}>
                          {contractStatusLabels[ContractStatus.SUSPENDED]}
                        </SelectItem>

                        <SelectItem value={ContractStatus.EXPIRED}>
                          {contractStatusLabels[ContractStatus.EXPIRED]}
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {fieldState.error && (
                      <FieldError>
                        {fieldState.error.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                )}
              />

              <Controller
                control={control}
                name="currency"
                render={({ field, fieldState }) => (
                  <FieldGroup>
                    <FieldLabel htmlFor="currency">
                      Валюта
                    </FieldLabel>

                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger id="currency" className="w-full">
                        <SelectValue placeholder="Выберите валюту" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={Currency.EUR}>
                          {currencyLabels[Currency.EUR]}
                        </SelectItem>

                        <SelectItem value={Currency.USD}>
                          {currencyLabels[Currency.USD]}
                        </SelectItem>

                        <SelectItem value={Currency.TRY}>
                          {currencyLabels[Currency.TRY]}

                        </SelectItem>

                        <SelectItem value={Currency.RUB}>
                          {currencyLabels[Currency.RUB]}
                        </SelectItem>

                        <SelectItem value={Currency.KGZ}>
                          {currencyLabels[Currency.KGZ]}
                        </SelectItem>

                        <SelectItem value={Currency.KZ}>
                          {currencyLabels[Currency.KZ]}
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {fieldState.error && (
                      <FieldError>
                        {fieldState.error.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                )}
              />

              <Controller
                control={control}
                name="boardType"
                render={({ field, fieldState }) => (
                  <FieldGroup>
                    <FieldLabel htmlFor="boardType">
                      Тип питания
                    </FieldLabel>

                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger id="boardType" className="w-full">
                        <SelectValue placeholder="Выберите тип питания" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={BoardType.RO}>
                           [boardTypeLabels[BoardType.RO]]
                        </SelectItem>

                        <SelectItem value={BoardType.BB}>
                           [boardTypeLabels[BoardType.BB]]
                        </SelectItem>

                        <SelectItem value={BoardType.HB}>
                           [boardTypeLabels[BoardType.HB]]
                        </SelectItem>

                        <SelectItem value={BoardType.FB}>
                           [boardTypeLabels[BoardType.FB]]
                        </SelectItem>

                        <SelectItem value={BoardType.AI}>
                           [boardTypeLabels[BoardType.AI]]
                        </SelectItem>

                        <SelectItem value={BoardType.UAI}>
                           [boardTypeLabels[BoardType.UAI]]
                        </SelectItem>
                      </SelectContent>
                    </Select>

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
                Периоды контракта
              </h2>

              <p className="text-sm text-muted-foreground">
                Укажите период продаж и период проживания гостей.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Продажи */}
              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                    <Coins className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">
                      Период продаж
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      Когда контракт доступен для продажи.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FieldGroup>
                    <FieldLabel htmlFor="salesStart">
                      Начало
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        id="salesStart"
                        type="date"
                        {...register('salesStart', {
                          valueAsDate: true,
                        })}
                      />

                      <InputGroupAddon>
                        <CalendarDays />
                      </InputGroupAddon>
                    </InputGroup>

                    {errors.salesStart && (
                      <FieldError>
                        {errors.salesStart.message}
                      </FieldError>
                    )}
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor="salesEnd">
                      Окончание
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        id="salesEnd"
                        type="date"
                        {...register('salesEnd', {
                          valueAsDate: true,
                        })}
                      />

                      <InputGroupAddon>
                        <CalendarDays />
                      </InputGroupAddon>
                    </InputGroup>

                    {errors.salesEnd && (
                      <FieldError>
                        {errors.salesEnd.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                </div>
              </div>

              {/* Проживание */}
              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                    <CalendarDays className="size-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">
                      Период проживания
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      Когда гости могут проживать по контракту.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FieldGroup>
                    <FieldLabel htmlFor="checkIn">
                      Заезд
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        id="checkIn"
                        type="date"
                        {...register('checkIn', {
                          valueAsDate: true,
                        })}
                      />

                      <InputGroupAddon>
                        <CalendarDays />
                      </InputGroupAddon>
                    </InputGroup>

                    {errors.checkIn && (
                      <FieldError>
                        {errors.checkIn.message}
                      </FieldError>
                    )}
                  </FieldGroup>

                  <FieldGroup>
                    <FieldLabel htmlFor="checkOut">
                      Выезд
                    </FieldLabel>

                    <InputGroup>
                      <InputGroupInput
                        id="checkOut"
                        type="date"
                        {...register('checkOut', {
                          valueAsDate: true,
                        })}
                      />

                      <InputGroupAddon>
                        <CalendarDays />
                      </InputGroupAddon>
                    </InputGroup>

                    {errors.checkOut && (
                      <FieldError>
                        {errors.checkOut.message}
                      </FieldError>
                    )}
                  </FieldGroup>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Рынки */}
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-1">
              <h2 className="text-base font-semibold">
                Рынки
              </h2>

              <p className="text-sm text-muted-foreground">
                Выберите страны и рынки, для которых действует контракт.
              </p>
            </div>

            <Controller
              control={control}
              name="marketIds"
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldLabel>
                    Рынки контракта
                  </FieldLabel>

                  <MultiSelect
                    options={data}
                    page={page}
                    value={field.value ?? []}
                    onChange={field.onChange}
                    isLoading={isLoading}
                    search={search}
                    onChangePage={setPage}
                    total={total ?? data.length}
                    onSearchChange={setSearch}
                    invalid={Boolean(fieldState.error)}
                    empty={
                      <Link
                        href="/"
                        target="_blank"
                        className="text-sm underline underline-offset-4"
                      >
                        Добавить страну
                      </Link>
                    }
                  />

                  {fieldState.error ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>
                      Можно выбрать несколько рынков.
                    </FieldDescription>
                  )}
                </FieldGroup>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </FieldSet>
  );
}
