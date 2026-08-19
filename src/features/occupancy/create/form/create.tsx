import { Luggage, UserCog } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

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

import type { OccupancyDto } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<OccupancyDto>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создания Размещения</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput
                {...register('title')}
                placeholder={'DBL- 2 Adults'}
                id={'title'} />
              <InputGroupAddon><Luggage /></InputGroupAddon>
            </InputGroup>
            {errors.title ? (
              <FieldError>{errors.title.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor={'adults'}>Количество взрослых</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type={'number'}
                {...register('adults', { valueAsNumber: true })}
                placeholder={'2'}
                id={'adults'}
                min={0} />
              <InputGroupAddon><UserCog /></InputGroupAddon>
            </InputGroup>
            {errors.adults ? (
              <FieldError>{errors.adults.message}</FieldError>
            ) : (
              <FieldDescription>Введите количество взрослых</FieldDescription>
            )}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor={'children'}>Количество детей</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type={'number'}
                {...register('children', { valueAsNumber: true })}
                placeholder={'0'}
                id={'children'}
                min={0} />
              <InputGroupAddon><UserCog /></InputGroupAddon>
            </InputGroup>
            {errors.children ? (
              <FieldError>{errors.children.message}</FieldError>
            ) : (
              <FieldDescription>Введите количество детей</FieldDescription>
            )}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor={'babies'}>Количество взрослых</FieldLabel>
            <InputGroup>
              <InputGroupInput
                type={'number'}
                {...register('babies', { valueAsNumber: true })}
                placeholder={'0'}
                id={'babies'}
                min={0} />
              <InputGroupAddon><UserCog /></InputGroupAddon>
            </InputGroup>
            {errors.babies ? (
              <FieldError>{errors.babies.message}</FieldError>
            ) : (
              <FieldDescription>Введите количество малышей</FieldDescription>
            )}
          </FieldGroup>

        </CardContent>
      </Card>

    </FieldSet>
  );
}