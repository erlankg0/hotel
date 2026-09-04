import { z } from 'zod';

export const ContractRoomSchema = z.object({
  roomCategoryId: z.uuid(),
  isActive: z.boolean().default(true),
});