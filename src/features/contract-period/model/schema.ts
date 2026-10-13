import { z } from 'zod';

import { IsNotEmpty, isoDate } from '@/shared/zod';

export const periodSchema = z
  .object({
    title: z.string(IsNotEmpty),
    startDate: isoDate,
    endDate: isoDate,
  })
  .refine((data) => data.endDate >= data.startDate, {
    path: ['endDate'],
    message: 'Дата окончания должна быть не раньше даты начала',
  });

export const contractPeriodSchema = z.object({
  periods: z
    .array(periodSchema)
    .min(1, { message: 'Добавьте хотя бы один период проживания' })
    .superRefine((periods, ctx) => {
      const sorted = periods
        .map((period, index) => ({
          ...period,
          index,
          start: new Date(period.startDate).getTime(),
          end: new Date(period.endDate).getTime(),
        }))
        .sort((a, b) => a.start - b.start);

      for (let i = 1; i < sorted.length; i++) {
        const previous = sorted[i - 1];
        const current = sorted[i];

        if (current.start < previous.end) {
          ctx.addIssue({
            code: 'custom',
            path: [current.index, 'startDate'],
            message: 'Периоды проживания не должны пересекаться',
          });
        }
      }
    }),
});