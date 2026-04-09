import { z } from 'zod';

enum Category {
  ROOM = 'ROOM',
  SUIT = 'SUIT',
  VILLA = 'VILLA',
}

const IsNotEmpty = { message: 'Обязательное поле' };

export const RoomSchema = z.object({
  title: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }),
  description: z.string(IsNotEmpty),
  subDescription: z.string({}).optional(),
  category: z.enum([Category.ROOM, Category.SUIT, Category.VILLA]).default(Category.ROOM),
  capacity: z.number(IsNotEmpty).default(2),
  bedRoomCount: z.number(IsNotEmpty).default(1),
  bathRoomCount: z.number(IsNotEmpty).default(1),
  uai: z.boolean(IsNotEmpty).default(false),
  amenityIds: z.array(z.string()).nonempty({ message: 'Удобства обязательны' }),
  requestsIds: z.array(z.string()).nonempty({ message: 'Запросы обязательны' }),
  photosIds: z.array(z.string()).nonempty({ message: 'Фото обязательны' }),
  videoId: z.string().optional(),
  galleryId: z.string().optional(),
});

export type RoomDto = z.infer<typeof RoomSchema>;