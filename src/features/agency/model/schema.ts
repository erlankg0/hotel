import { z } from 'zod';

import { Currency, PaymentType, AgencyType } from '@/shared/const/enums'
import { IsNotEmpty } from '@/shared/zod';


export const agencySchema = z.object({
  title: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }),
  code: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }).max(10, { message: 'Максимум 10 символов' }),

  creditLimit: z.number().min(0, { message: 'Кредитный лимит не может быть отрицалтельным' }).int().optional(),
  commissionRate: z
    .number()
    .min(0, { message: 'Комиссия не может быть отрицательной' })
    .max(100, { message: 'Комиссия не может быть больше 100%' }),

  currency: z.enum([Currency.USD, Currency.EUR, Currency.TRY, Currency.RUB, Currency.KGZ, Currency.KZ]),
  isFixedCurrency: z.boolean().optional(),

  hasAr: z.boolean().optional(),
  arNo: z.string().optional(),
  arDate: z.date().optional(),

  paymentType: z.enum([PaymentType.CASH, PaymentType.CASH_BY_GUEST, PaymentType.CREDIT, PaymentType.PREPAYMENT]),
  agencyType: z.enum([AgencyType.AGENCY, AgencyType.COMPAMNY, AgencyType.INVIDUAL, AgencyType.INVIDUAL, AgencyType.WALKIN]),

  isBlacklist: z.boolean().optional(),
  isPassive: z.boolean().optional(),
  isBonus: z.boolean().optional(),
  isInternetAgency: z.boolean().optional(),
  applyCallCenter: z.boolean().optional(),
  applyOnline: z.boolean().optional(),
  applyOta: z.boolean().optional(),
  applyExtraServices: z.boolean().optional(),

  backgroundColor: z
    .string()
    .optional(),

  textColor: z
    .string()
    .optional(),
});

const operatorSchema = z.object({
  title: z.string(IsNotEmpty),
  id: z.uuid(IsNotEmpty),
});

export const agencyUpdateSchema = agencySchema.extend({
  market: operatorSchema,
});
