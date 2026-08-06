import type { FieldValues, Control, UseFormRegister, ArrayPath, FieldErrors } from 'react-hook-form';

export type Props<T extends FieldValues> = {
  control: Control<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  path: ArrayPath<T>;
  labels?: string
}