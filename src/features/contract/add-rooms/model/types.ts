import type { addContractRoomsSchema } from './schema';
import type { z } from 'zod';

export type ContractRoomDto = {
    contractId: string;
    roomCategoryIds: string[]
}

export type ContractRoomFromInput = z.input<typeof addContractRoomsSchema>;
export type ContractRoomFromOutput = z.output<typeof addContractRoomsSchema>;