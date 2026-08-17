import { hotelSchema } from './schema'
import { z } from 'zod'

export type HotelDto = z.infer<typeof hotelSchema>
export type HotelType = HotelDto & { id: string }
export type HotelCreateFromInput = z.input<typeof hotelSchema>
export type HotelCreateFormValues = z.output<typeof hotelSchema>