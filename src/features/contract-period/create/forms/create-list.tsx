'use client';

import { useEffect } from 'react';
import { Plus, CalendarRange } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { FieldSet } from '@/shared/ui/field';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

import { CreatePeriod } from './create-period';
import { ContractPeriodFormValues } from '../../model/types';

export function ContractPeriodList() {
  const { control, getValues } = useFormContext<ContractPeriodFormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'periods',
  });

  useEffect(() => {
    const periods = getValues('periods');

    if (!periods || periods.length < 2) {
      const missingCount = 2 - (periods?.length ?? 0);

      for (let i = 0; i < missingCount; i++) {
        append({
          title: '',
          startDate: '',
          endDate: '',
        });
      }
    }
  }, [append, getValues]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted">
            <CalendarRange className="size-5 text-muted-foreground" />
          </div>

          <div className="min-w-0 space-y-1">
            <CardTitle className="text-base font-semibold tracking-tight">
              Периоды проживания
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              Сезоны и даты размещения по контракту
            </p>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0 gap-2 rounded-full"
          onClick={() =>
            append({
              title: '',
              startDate: '',
              endDate: '',
            })
          }
        >
          <Plus className="size-4" />
          <span className="hidden sm:inline">Добавить период</span>
          <span className="sm:hidden">Добавить</span>
        </Button>
      </CardHeader>

      <CardContent>
        <FieldSet className="flex flex-col gap-4">
          {fields.map((field, index) => (
            <CreatePeriod
              key={field.id}
              name={`periods.${index}`}
              onRemove={() => remove(index)}
            />
          ))}
        </FieldSet>
      </CardContent>
    </Card>
  );
}