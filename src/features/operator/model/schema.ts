import { z } from 'zod';

import { IsNotEmpty, fileSchema, PhoneSchema, EmailSchema } from '@/shared/zod';

const operatorSchema = z.object({
  title: z.string(IsNotEmpty),
  iconId: z.uuid(),
  emailIds: z.array(
    z.string().uuid({ message: 'Неверный формат UUID' }),
  ).min(1, { message: 'Необходимо указать хотя бы один email' }),

  phoneIds: z.array(
    z.string().uuid({ message: 'Неверный формат UUID' }),
  ).min(1, { message: 'Необходимо указать хотя бы один номер телефона' }),
});

export const operatorCreateSchema = operatorSchema.omit({
  iconId: true, emailIds: true, phoneIds: true,
}).extend({
  file: fileSchema,
  emails: z.array(EmailSchema).min(1, 'Добавьте минимум один email'),
  phones: z.array(PhoneSchema).min(1, 'Добавьте минимум один телефон'),
});
export const operatorUpdateSchema = operatorCreateSchema.extend({
  id: z.string(IsNotEmpty),
});

export type OperatorCreateDto = z.infer<typeof operatorSchema>;
export type OperatorUpdateDto = OperatorCreateDto & { id: string };

export type OperatorFormInput = z.input<typeof operatorCreateSchema>;
export type OperatorFormOutput = z.output<typeof operatorSchema>;