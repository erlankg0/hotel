'use client';

import { useForm, FormProvider } from 'react-hook-form';

import { cn } from '../../../lib/utils';

import type { WrapperFormProps } from '../model/type';
import type { FieldValues } from 'react-hook-form';

export function WrapperForm<T extends FieldValues>({
                                                     children,
                                                     options,
                                                     className,
                                                     onSubmit,
                                                   }: WrapperFormProps<T>) {
  const methods = useForm(options);
  return (
    <FormProvider {...methods}>
      <form
        className={cn(className, 'flex flex-col gap-4')}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );

}