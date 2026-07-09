import { z } from 'zod';

import { Category } from '@/shared/const/category';
import { phoneValidator, IsNotEmpty } from '@/shared/validator';

export const phoneSchema = z.object({
  title: z.string(IsNotEmpty).min(4, 'Минимум 4 символа'),
  phone: phoneValidator,
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});

export type PhoneDto = z.infer<typeof phoneSchema>
export type PhoneFormInput = z.input<typeof phoneSchema>
export type PhoneFormValues = z.output<typeof phoneSchema>
export type PhoneType = PhoneDto & {
  id: number;
};
