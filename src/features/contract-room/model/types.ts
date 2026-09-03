import { ContractRoomSchema } from './schema';
import type { z } from 'zod';

export type ContractRoomType = z.infer<typeof ContractRoomSchema>;

export type ContractRoomFromInput = z.input<typeof ContractRoomSchema>;
export type ContractRoomFromOutput = z.output<typeof ContractRoomSchema>;

export type ContactRoomDto = ContractRoomType & {
    contractId: string
};