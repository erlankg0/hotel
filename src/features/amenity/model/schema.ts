import { z } from 'zod';

import { IsNotEmpty } from '@/shared/validator';

export const AmenitySchema = z.object({
  name: z.string(IsNotEmpty).min(4, { message: 'Минимум 4 символа' }),
  icon: z.string({ message: 'Выберите иконку' }),
});

export type AmenityDto = z.infer<typeof AmenitySchema>;
export type AmenityType = AmenityDto & {
  id: string
}