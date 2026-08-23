import type { countrySchema, countryCreateSchema } from './schema';
import type { z } from 'zod';

export type CountryDto = z.infer<typeof countryCreateSchema>;
export type CountryType = z.infer<typeof countrySchema> & { id: string };

export type CountryCreateInput = z.input<typeof countryCreateSchema>;
export type CountryCreateOutput = z.output<typeof countryCreateSchema>;
