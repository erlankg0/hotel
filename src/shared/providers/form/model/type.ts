import type { ReactNode } from 'react';
import type { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';

export type WrapperFormProps<
  TFieldValues extends FieldValues,
  TTransformedValues extends FieldValues = TFieldValues,
> = {
  children: ReactNode;
  options?: UseFormProps<TFieldValues, any, TTransformedValues>;
  onSubmit: SubmitHandler<TTransformedValues>;
  className?: string;
};
