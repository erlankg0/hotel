import type { z } from 'zod';
import { periodSchema } from './schema';

export type ContractPeriodFormValues = z.infer<
  typeof periodSchema
>;

export type ContractPeriodDto = ContractPeriodFormValues & {
  contractId: string;
};