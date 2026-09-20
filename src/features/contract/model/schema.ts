import { z } from 'zod';

import { BoardType, ContractStatus, Currency } from '@/shared/const/enums';
import { IsNotEmpty } from '@/shared/zod';
import { isoDate } from '@/shared/zod';

export const marketSchema = z.object({
  title: z.string(IsNotEmpty),
  id: z.uuid(),
});

export const ContractSchema = z
  .object({
    title: z
      .string(IsNotEmpty)
      .trim()
      .min(1, 'Название обязательно')
      .max(150, 'Максимум 150 символов'),

    status: z.enum(
      [
        ContractStatus.ACTIVE,
        ContractStatus.DRAFT,
        ContractStatus.EXPIRED,
        ContractStatus.SUSPENDED,
      ],
      IsNotEmpty,
    ),

    currency: z.enum(
      [
        Currency.EUR,
        Currency.USD,
        Currency.TRY,
        Currency.RUB,
        Currency.KGZ,
        Currency.KZ,
      ],
      IsNotEmpty,
    ),

    boardType: z.enum(
      [
        BoardType.RO,
        BoardType.BB,
        BoardType.HB,
        BoardType.FB,
        BoardType.AI,
        BoardType.UAI,
      ],
      IsNotEmpty,
    ),

    checkIn: isoDate,
    checkOut: isoDate,
    salesStart: isoDate,
    salesEnd: isoDate,
  }).superRefine((data, ctx) => {
    if (data.salesEnd < data.salesStart) {
      ctx.addIssue({
        code: 'custom',
        message: 'Дата окончания не может быть раньше даты начала',
        path: ['salesEnd'],
      });
    }

    if (data.checkOut < data.checkIn) {
      ctx.addIssue({
        code: 'custom',
        message: 'Дата выезда не может быть раньше даты заезда',
        path: ['checkOut'],
      });
    }
  });


export const ContractCreateFormSchema = ContractSchema.extend({
  marketIds: z
    .array(marketSchema)
    .min(1, 'Выберите хотя бы один рынок'),
});