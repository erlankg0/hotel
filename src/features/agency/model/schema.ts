import { z } from 'zod';

import { CategoryAgency } from '@/shared/const/category';
import { IsNotEmpty, fileSchema, EmailSchema, PhoneSchema } from '@/shared/zod';


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
    emails: z.array(EmailSchema).min(1, 'Добавьте минимум один email'),
    phones: z.array(PhoneSchema).min(1, 'Добавьте минимум один телефон'),
  });

export type AgencyDto = z.infer<typeof agencySchema>;
export type AgencyType = AgencyDto & { id: string }
export type AgencyCreateFromInput = z.input<typeof agencyCreateSchema>
export type AgencyCreateFormValues = z.output<typeof agencyCreateSchema>

export type AgencyCreateDto = z.infer<typeof agencyCreateSchema>;
export type AgencyCreateForm = z.input<typeof agencyCreateSchema>;