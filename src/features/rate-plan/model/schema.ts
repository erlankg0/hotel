import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const ratePlanSchema = z.object({
    title: z.string(IsNotEmpty),
    code: z.string(IsNotEmpty),

    isRefundable: z.boolean(IsNotEmpty),
    isActive: z.boolean(IsNotEmpty),
    priority: z.int(IsNotEmpty),
});