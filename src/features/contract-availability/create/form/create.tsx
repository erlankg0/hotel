import { Check } from 'lucide-react';
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

import type { ContactAvailabilityFormInput } from '../../model/types';

export function CreateForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactAvailabilityFormInput>();

  return (
    <FieldSet>
      <article>
        <FieldTitle className="text-xl font-bold text-center">
          Добавить категорию номера в контракт
        </FieldTitle>
      </article>
      <Card>
        <CardContent>
          <FieldGroup>
            <FieldLabel htmlFor={'date'}>Активна</FieldLabel>
            <InputGroup>
              <InputGroupInput {...register('date')} id={'date'} />
              <InputGroupAddon><Check /></InputGroupAddon>
            </InputGroup>
            {errors.date ? (
              <FieldError>{errors.date.message}</FieldError>
            ) : (
              <FieldDescription>
                Выберите, если категория номера активна в контракте
              </FieldDescription>
            )}
          </FieldGroup>
        </CardContent>
      </Card>
    </FieldSet>
  );
}