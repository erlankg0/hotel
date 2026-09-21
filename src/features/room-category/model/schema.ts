import { z } from 'zod';

import { CategorySection } from '@/shared/const/room-category';
import { IsNotEmpty } from '@/shared/zod'

export const RoomCategorySchema = z.object({
    title: z.string(IsNotEmpty).max(100, { message: 'Максимум 100 символов' }).min(5, { message: 'Минимум 5 симоволов' }),
    shortTitle: z.string(IsNotEmpty).max(6, { message: 'Максимум 6 символов' }).min(3, { message: 'Минимум 3 символа' }),
    categorySection: z.enum([CategorySection.VILLA, CategorySection.BUNGALOW, CategorySection.MAIN]),
});