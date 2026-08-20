import { Asterisk } from 'lucide-react';
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

import type { OccupancyRuleDto } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<OccupancyRuleDto>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Правила размещения</FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'multiplier'}>Названия</FieldLabel>
            <InputGroup>
              <InputGroupInput
                {...register('multiplier')}
                placeholder={'2'}
                id={'multiplier'} />
              <InputGroupAddon><Asterisk /></InputGroupAddon>
            </InputGroup>
            {errors.multiplier ? (
              <FieldError>{errors.multiplier.message}</FieldError>
            ) : (
              <FieldDescription>Введите уникальное названия</FieldDescription>
            )}
          </FieldGroup>

        </CardContent>
      </Card>

    </FieldSet>
  );
}