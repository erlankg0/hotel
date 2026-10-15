import type { contractPeriodSchema } from './schema';
import type { z } from 'zod';

export type ContractPeriodFormValues = z.infer<
  typeof contractPeriodSchema
>;

export type ContractPeriodDto = ContractPeriodFormValues & {
  contractId: string;
};