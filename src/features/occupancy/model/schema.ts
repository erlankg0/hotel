import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const occupancySchema = z.object({
  title: z.string(IsNotEmpty),
  adults: z
    .number(IsNotEmpty)
    .int()
    .min(1),

  children: z
    .number(IsNotEmpty)
    .int()
    .min(0),

  babies: z
    .number(IsNotEmpty)
    .int()
    .min(0),

});