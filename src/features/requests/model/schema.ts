import { z } from 'zod';

export const requestSchema = z.object({
  name: z.string({ message: 'Объязательное поле' }).min(4, { message: 'Минимум 4 символа' }),
  icon: z.string({ message: 'Выберите иконку' }),
});

