import { z } from 'zod';

import { Category } from '@/shared/const/category';
import { IsNotEmpty } from '@/shared/validator';


export const emailSchema = z.object({
  title: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }),
  email: z.email({ message: 'Не правильный формат э почты' }),
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});

export type EmailDto = z.infer<typeof emailSchema>
export type EmailType = EmailDto & {
  id: string;
}