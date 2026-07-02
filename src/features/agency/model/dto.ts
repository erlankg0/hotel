import { z } from 'zod';

import { IsNotEmpty, fileSchema } from '@/shared/validator';

const AgecySchema = z.object({
  title: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }),
  description: z.string(IsNotEmpty).min(10, { message: 'Минимум 10 символа' })
});