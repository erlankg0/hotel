import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const AmenitySchema = z.object({
  name: z.string(IsNotEmpty).min(4, { message: 'Минимум 4 символа' }),
  icon: z.string({ message: 'Выберите иконку' }),
});
