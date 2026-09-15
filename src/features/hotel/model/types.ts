import type { hotelSchema } from './schema';
import type { z } from 'zod';

export type HotelDto = z.infer<typeof hotelSchema>
export type HotelType = HotelDto & { id: string }
export type HotelFromInput = z.input<typeof hotelSchema>
export type HotelFormValues = z.output<typeof hotelSchema>