import { z } from 'zod';

import { IsNotEmpty } from '@/shared/zod';

export const optionSchema = z.object({
  title: z.string(IsNotEmpty),
  id: z.uuid()
});



export const addContractRoomsSchema = z.object({
  roomCategoryIds: z
    .array(optionSchema)
    .min(1, 'Выберите хотя бы одну страну'),
});