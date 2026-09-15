import { z } from 'zod';

import { BoardType, ContractStatus, Currency } from '@/shared/const/enums';
import { IsNotEmpty } from '@/shared/zod';

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
        ContractStatus.EXRIRED,
        ContractStatus.SUSTENDED,
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

    startDate: z.date(IsNotEmpty),

    endDate: z.date(IsNotEmpty),
  })
  .superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
      ctx.addIssue({
        code: 'custom',
        message: 'Дата окончания не может быть раньше даты начала',
        path: ['endDate'],
      });
    }
  });

export const ContractCreateFormSchema = ContractSchema.extend({
  marketIds: z.array(marketSchema),
});