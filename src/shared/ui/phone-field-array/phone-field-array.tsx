import { useFieldArray } from 'react-hook-form';

import {
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldContent,
  FieldGroup,
  FieldLabel,
  Field,
} from '@/shared/ui/field';
import type { Props } from './model/types';
import type { FieldValues } from 'react-hook-form';

import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

export function PhoneFieldArray<T extends FieldValues>({
                                                         control,
                                                         register,
                                                         errors,
                                                         path,
                                                         labels = 'Телефоны',
                                                       }: Props<T>) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: path,
  });


  return (
    <FieldSet>
      <FieldLegend>{labels}</FieldLegend>
      <FieldContent>
        {fields.map((field, i) => (
          <FieldGroup key={field.id}>
            <Field className={'rounded-lg border p-4 space-y-3'}>
              <InputGroup>
                <InputGroupInput {...register(`${path}.${i}.title`)} />
              </InputGroup>
            </Field>
          </FieldGroup>
        ))}
      </FieldContent>
    </FieldSet>

  );
}