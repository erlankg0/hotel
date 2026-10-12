'use client';

import { FieldSet } from '@/shared/ui/field';
import { useFieldArray, useFormContext } from 'react-hook-form';

export function ContractPeriodList() {
  const { control } = useFormContext()
  const { } = useFieldArray({
    control,
    name: 'test'
  })
  return (
    <FieldSet>

    </FieldSet>
  );
}