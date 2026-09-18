import { Group } from 'lucide-react';
import Link from 'next/link';
import { useFormContext, Controller } from 'react-hook-form';

import { Card, CardContent } from '@/shared/ui/card';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';
import { MultiSelect } from '@/shared/ui/multi-select';

import type { MarketCreateInput } from '../../model/types';
import type { Props } from '@/shared/types/types';


export function CreateForm({ data, isLoading, page, search, setPage, setSearch }: Props) {
  const {
    register,
    formState: { errors },
    control
  } = useFormContext<MarketCreateInput>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание групп рынков</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Рынок</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('title')} placeholder={'СНГ'} id={'title'} />
              <InputGroupAddon><Group /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
        </CardContent>

        <CardContent>
          <Controller
            control={control}
            name={'countries'}
            render={({ field, fieldState }) => (
              <>
                <MultiSelect
                  options={data}
                  page={page}
                  value={field.value ?? []}
                  onChange={field.onChange}
                  isLoading={isLoading}
                  search={search}
                  onChangePage={setPage}
                  total={data.length}
                  onSearchChange={setSearch}
                  invalid={Boolean(fieldState.error)}
                  empty={(<Link href={'/'} target={'_blank'}>Добавить Страну</Link>)}
                />
                {fieldState.error ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldDescription>Выберите страны</FieldDescription>
                )}
              </>
            )}
          />
        </CardContent>
      </Card>

    </FieldSet>
  );
}