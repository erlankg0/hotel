import type { AmenitySchema } from './schema';
import type { z } from 'zod';

export type AmenityDto = z.infer<typeof AmenitySchema>;
export type AmenityType = AmenityDto & { id: string };

export type AmenityFormInput = z.input<typeof AmenitySchema>;
export type AmenityFormOutput = z.output<typeof AmenitySchema>;
