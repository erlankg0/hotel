'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { cn } from '../../../lib/utils';

import type { WrapperFormProps } from '../model/type';
import type { FieldValues } from 'react-hook-form';

export function WrapperForm<
  TFieldValues extends FieldValues,
  TTransformedValues extends FieldValues = TFieldValues,
>({
  children,
  options,
  className,
  onSubmit,
}: WrapperFormProps<TFieldValues, TTransformedValues>) {
  const methods = useForm<TFieldValues, any, TTransformedValues>(options);

  return (
    <FormProvider {...methods}>
      <form
        className={cn(className, 'flex flex-col gap-2')}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
