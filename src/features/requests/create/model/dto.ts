import { z } from 'zod';

export const RequestSchema = z.object({
  name: z.string({ message: 'Объязательное поле' }).min(4, { message: 'Минимум 4 символа' }),
});

export type RequestDto = z.infer<typeof RequestSchema>;