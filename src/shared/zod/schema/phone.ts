import { z } from 'zod';

import { Category } from '../../const/category';
import { IsNotEmpty, phoneValidator } from '../const/validator';

export const PhoneSchema = z.object({
  title: z.string(IsNotEmpty).min(4, 'Минимум 4 символа'),
  phone: phoneValidator,
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});

export type PhoneType = z.infer<typeof PhoneSchema>;