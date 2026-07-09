import { z } from 'zod';

import { Category, CategoryAgency } from '@/shared/const/category';
import { IsNotEmpty, fileSchema, phoneValidator } from '@/shared/validator';


const agencyEmailSchema = z.object({
  title: z.string(IsNotEmpty).min(2, 'Минимум 2 символа'),
  email: z.string().email('Неверный email'),
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});

const agencyPhoneSchema = z.object({
  title: z.string(IsNotEmpty).min(4, 'Минимум 4 символа'),
  phone: phoneValidator,
  category: z.enum([Category.GENERAL, Category.CONTACT, Category.STOP_SALE, Category.INFO, Category.GUEST_RELATION, Category.OTHER]),
});


export const agencySchema = z.object({
  title: z.string(IsNotEmpty)
    .min(3, { message: 'Минимум 3 символа' }),

  short: z.string(IsNotEmpty)
    .min(3, { message: 'Минимум 10 символа' }).max(10),

  category: z.enum([CategoryAgency.AGENCY, CategoryAgency.TOUR]),

  emailIds: z.array(
    z.string().uuid({ message: 'Неверный формат UUID' }),
  ).min(1, { message: 'Необходимо указать хотя бы один email' }),

  phones: z.array(
    z.string().uuid({ message: 'Неверный формат UUID' }),
  ).min(1, { message: 'Необходимо указать хотя бы один номер телефона' }),

  iconId: z.string()
    .optional()
    .or(z.literal('')),
});

export const agencyCreateSchema = agencySchema
  .omit({ iconId: true, emailIds: true })
  .extend({
    file: fileSchema,
    emails: z.array(agencyEmailSchema).min(1, 'Добавьте минимум один email'),
    phones: z.array(agencyPhoneSchema).min(1, 'Добавьте минимум один телефон'),
  });

export type AgencyDto = z.infer<typeof agencySchema>;
export type AgencyType = AgencyDto & { id: string }
export type AgencyCreateFromInput = z.input<typeof agencyCreateSchema>
export type AgencyCreateFormValues = z.output<typeof agencyCreateSchema>

export type AgencyCreateDto = z.infer<typeof agencyCreateSchema>;
export type AgencyCreateForm = z.input<typeof agencyCreateSchema>;