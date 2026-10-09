import { z } from 'zod';
import { IsNotEmpty, isoDate } from '@/shared/zod'

export const periodSchema = z.object({
    title: z.string(IsNotEmpty),
    startDate: isoDate,
    endDate: isoDate,
}).refine(
    (data) => data.endDate >= data.startDate,
    {
        path: ['endDate'],
        message: 'Дата окончания должна быть не раньше даты начала',
    },
);