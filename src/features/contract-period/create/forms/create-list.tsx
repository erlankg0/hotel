'use client';

import { Plus } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { FieldSet } from '@/shared/ui/field';

import { CreatePeriod } from './create-period';

export function ContractPeriodList() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'periods',
  });

  return (
    <FieldSet className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <CreatePeriod
          key={field.id}
          name={`periods.${index}`}
          onRemove={() => remove(index)}
        />
      ))}

      <Button
        type="button"
        variant="outline"
        className="self-start"
        onClick={() => append({ title: '', startDate: undefined, endDate: undefined })}
      >
        <Plus aria-hidden="true" />
        Добавить период
      </Button>
    </FieldSet>
  );
}
