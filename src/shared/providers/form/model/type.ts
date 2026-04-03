import type { ReactNode } from 'react';
import type { UseFormProps, FieldValues } from 'react-hook-form';

export type WrapperFormProps<T extends FieldValues> = {
  children: ReactNode;
  options?: UseFormProps<T>;
  onSubmit: (data: T) => void;
  className?: string;
}