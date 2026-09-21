import type { contractAvailabilitySchema } from './schema';
import type { DateType } from '@/shared/types/date';
import type { z } from 'zod';

export type ContractAvailabilityDto = z.infer<typeof contractAvailabilitySchema>;
export type ContactAvailabilityType = ContractAvailabilityDto & DateType
export type ContactAvailabilityFormInput = z.input<typeof contractAvailabilitySchema>;
export type ContractAvailabilityFormOutput = z.output<typeof contractAvailabilitySchema>;