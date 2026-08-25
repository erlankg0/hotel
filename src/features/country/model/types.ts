import type { countrySchema, countryFormSchema } from './schema';
import type { z } from 'zod';

export type CountryDto = z.infer<typeof countryFormSchema>;
export type CountryType = z.infer<typeof countrySchema> & { id: string };

export type CountryCreateInput = z.input<typeof countryFormSchema>;
export type CountryCreateOutput = z.output<typeof countryFormSchema>;

export type CountryUpdateDto = z.infer<typeof countryFormSchema> & { id: string };
export type CountryUpdateInput = z.input<typeof countryFormSchema>;
export type CountryUpdateOutput = z.output<typeof countryFormSchema>;
