import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const countrySchema = z.object({
  title: z.string(IsNotEmpty),
  id: z.uuid()
});

export const marketSchema = z.object({
  title: z.string(IsNotEmpty),
});

export const MarketCreateFormSchema = marketSchema.extend({
  countries: z
    .array(countrySchema)
    .min(1, 'Выберите хотя бы одну страну'),
});