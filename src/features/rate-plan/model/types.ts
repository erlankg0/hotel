import type { ratePlanSchema } from './schema';
import type { DateType } from '@/shared/types/date';
import type { z } from 'zod';

export type RatePlanDto = z.infer<typeof ratePlanSchema> & { contractId: string };
export type RatePlanFromInput = z.input<typeof ratePlanSchema>;
export type RatePlanFromOutput = z.output<typeof ratePlanSchema>;
export type RatePlanType = RatePlanDto & DateType;