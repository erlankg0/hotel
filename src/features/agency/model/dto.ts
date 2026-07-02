import { z } from 'zod';

import { IsNotEmpty, fileSchema } from '@/shared/validator';

import { CategoryAgency, CategoryEmail } from '../model/enum';

const emailSchema = z.object({
  title: z.string(IsNotEmpty).min(2, 'Минимум 2 символа'),
  email: z.string().email('Неверный email'),
  category: z.enum([CategoryEmail.GENERAL, CategoryEmail.CONTACT, CategoryEmail.STOP_SALE, CategoryEmail.INFO, CategoryEmail.GUEST_RELATION, CategoryEmail.OTHER]),
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

  iconId: z.string()
    .optional()
    .or(z.literal('')),
});

export const agencyCreateSchema = agencySchema
  .omit({ iconId: true, emailIds: true })
  .extend({
    file: fileSchema,
    emails: z.array(emailSchema).min(1, 'Добавьте минимум один email'),
  });


export type AgencyDto = z.infer<typeof agencySchema>;
export type AgencyCreateDto = z.infer<typeof agencyCreateSchema>;
export type AgencyCreateForm = z.input<typeof agencyCreateSchema>;