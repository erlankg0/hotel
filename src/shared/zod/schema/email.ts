import { z } from 'zod';

import { Category } from '../../const/category';
import { IsNotEmpty } from '../const/validator';

export const EmailSchema = z.object({
  title: z.string(IsNotEmpty).min(2, 'Минимум 2 символа'),
  email: z.string().email('Неверный email'),
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});

export type EmailType = z.infer<typeof EmailSchema>;