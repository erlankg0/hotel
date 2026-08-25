import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const countrySchema = z.object({
  title: z.string(IsNotEmpty),
  shortTitle: z.string(IsNotEmpty),
  marketId: z.uuid(),
});

export const countryFormSchema = countrySchema.omit({
  marketId: true,
});