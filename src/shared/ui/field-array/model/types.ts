import type { ReactNode } from 'react';
import type {
  ArrayPath,
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

export interface Props<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  path: ArrayPath<T>;
  labels?: string;
}

export type FieldTableProps = {
  children: ReactNode;
  valueLabel: string;
  handleAdd: () => void;
};
