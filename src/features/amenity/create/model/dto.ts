import { z } from 'zod';

export const AmenitySchema = z.object({
  name: z.string({ message: 'Объязательное поле' }).min(4, { message: 'Минимум 4 символа' }),
});

export type AmenityDto = z.infer<typeof AmenitySchema>;