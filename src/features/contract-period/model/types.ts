import type { z } from 'zod';
import { contractPeriodSchema } from './schema';

export type ContractPeriodFormValues = z.infer<
  typeof contractPeriodSchema
>;

export type ContractPeriodDto = ContractPeriodFormValues & {
  contractId: string;
};