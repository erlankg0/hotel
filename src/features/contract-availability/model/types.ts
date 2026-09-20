import type { z } from 'zod';
import { contractAvailabilitySchema } from './schema';

export type ContarctAvailabilityDto = z.infer<typeof contractAvailabilitySchema>;