import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';


export const agencySchema = z.object({
  title: z.string(IsNotEmpty)
    .min(3, { message: 'Минимум 3 символа' }),
  shortTitle: z.string().optional()
});
