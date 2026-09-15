import type { ContractSchema, ContractCreateFormSchema } from './schema';
import type { DateType } from '@/shared/zod';
import type { z } from 'zod';

export type ContractDto = z.infer<typeof ContractSchema> & {
  hotelId: string,
  marketIds: string[],
  agencyId: string,
};

export type ContractFormInput = z.input<typeof ContractCreateFormSchema>;
export type ContractFormOutput = z.output<typeof ContractCreateFormSchema>;

export type ContractType = z.infer<typeof ContractSchema> & DateType;