import { z } from 'zod';
import { IsNotEmpty } from '@/shared/zod'

export const hotelSchema = z.object({
    title: z.string(IsNotEmpty),
    description: z.string().optional()
})