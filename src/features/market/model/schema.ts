import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const marketSchema = z.object({
  title: z.string(IsNotEmpty),
  shortTitle: z.string(IsNotEmpty),
});