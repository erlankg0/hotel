import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';


export const agencySchema = z.object({
  title: z.string(IsNotEmpty)
    .min(3, { message: 'Минимум 3 символа' }),
  shortTitle: z.string().optional(),
});

const operatorSchema = z.object({
  title: z.string(IsNotEmpty),
  id: z.uuid(IsNotEmpty),
});

export const agencyUpdateSchema = agencySchema.extend({
  market: operatorSchema,
});
