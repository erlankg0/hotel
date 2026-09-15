import { CalendarDays, Luggage } from 'lucide-react';
import Link from 'next/link';
import { Controller, useFormContext } from 'react-hook-form';

import {
  BoardType,
  ContractStatus,
  Currency,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import type { ContractFormInput } from '../../model/types';
import type { Props } from '@/shared/types/types';

export function CreateForm({ search, setSearch, data, isLoading, page, setPage }: Props) {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<ContractFormInput>();


  return (
    <FieldSet>
      <article>
        <FieldTitle className="text-center text-xl font-bold">
          Создание контракта
        </FieldTitle>
      </article>

      <Card>
        <CardContent>
          <FieldGroup>
            <FieldGroup>
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
                  <Luggage />
                </InputGroupAddon>
              </InputGroup>

              {errors.title ? (
                <FieldError>
                  {errors.title.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Введите название контракта
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
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={ContractStatus.DRAFT}>
                        Черновик
                      </SelectItem>

                      <SelectItem value={ContractStatus.ACTIVE}>
                        Активный
                      </SelectItem>

                      <SelectItem value={ContractStatus.EXPIRED}>
                        Истёкший
                      </SelectItem>

                      <SelectItem value={ContractStatus.SUSPENDED}>
                        Приостановлен
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
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите валюту" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={Currency.EUR}>EUR</SelectItem>
                      <SelectItem value={Currency.USD}>USD</SelectItem>
                      <SelectItem value={Currency.TRY}>TRY</SelectItem>
                      <SelectItem value={Currency.RUB}>RUB</SelectItem>
                      <SelectItem value={Currency.KGZ}>KGZ</SelectItem>
                      <SelectItem value={Currency.KZ}>KZ</SelectItem>
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
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите тип питания" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={BoardType.RO}>RO</SelectItem>
                      <SelectItem value={BoardType.BB}>BB</SelectItem>
                      <SelectItem value={BoardType.HB}>HB</SelectItem>
                      <SelectItem value={BoardType.FB}>FB</SelectItem>
                      <SelectItem value={BoardType.AI}>AI</SelectItem>
                      <SelectItem value={BoardType.UAI}>UAI</SelectItem>
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
            <FieldGroup>
              <FieldLabel htmlFor="startDate">
                Дата начала
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="startDate"
                  type="date"
                  {...register('startDate', {
                    valueAsDate: true,
                  })}
                />

                <InputGroupAddon>
                  <CalendarDays />
                </InputGroupAddon>
              </InputGroup>

              {errors.startDate && (
                <FieldError>
                  {errors.startDate.message}
                </FieldError>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="endDate">
                Дата окончания
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="endDate"
                  type="date"
                  {...register('endDate', {
                    valueAsDate: true,
                  })}
                />

                <InputGroupAddon>
                  <CalendarDays />
                </InputGroupAddon>
              </InputGroup>

              {errors.endDate && (
                <FieldError>
                  {errors.endDate.message}
                </FieldError>
              )}
            </FieldGroup>
          </FieldGroup>
        </CardContent>
        <CardContent>
          <Controller
            control={control}
            name={'marketIds'}
            render={({ field, fieldState }) => (
              <>
                <MultiSelect
                  options={data}
                  page={page}
                  value={field.value}
                  onChange={field.onChange}
                  isLoading={isLoading}
                  search={search}
                  onChangePage={setPage}
                  total={data.length}
                  onSearchChange={setSearch}
                  empty={(<Link href={'/'} target={'_blank'}>Добавить Страну</Link>)}
                />
                {fieldState.error ? (
                  <FieldError>{fieldState.error.message}</FieldError>
                ) : (
                  <FieldDescription>Выберите рынки</FieldDescription>
                )}
              </>
            )}
          />
        </CardContent>

      </Card>
    </FieldSet>
  );
}