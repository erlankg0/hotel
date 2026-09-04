import { RoomCategorySchema } from './schema';
import type { z } from 'zod';

export type RoomCategoryDto = z.infer<typeof RoomCategorySchema> & {
    hotelId: string
};

export type RoomCategoryFormInput = z.input<typeof RoomCategorySchema>;
export type RoomCategoryFormOutput = z.output<typeof RoomCategorySchema>;

export type RoomCategortType = RoomCategoryDto & { id: string }