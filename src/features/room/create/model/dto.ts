import { z } from 'zod';

export enum Category {
  ROOM = 'ROOM',
  SUIT = 'SUIT',
  VILLA = 'VILLA',
}

const IsNotEmpty = { message: 'Обязательное поле' };
const fileSchema = z.custom<File>((value) => {
  if (typeof File === 'undefined') {
    return false;
  }

  return value instanceof File;
}, 'Некорректный файл');

export const RoomSchema = z.object({
  title: z.string(IsNotEmpty).min(3, { message: 'Минимум 3 символа' }),
  description: z.string(IsNotEmpty),
  subDescription: z.string({}).optional(),
  category: z.enum([Category.ROOM, Category.SUIT, Category.VILLA]),
  capacity: z.number(IsNotEmpty),
  bedRoomCount: z.number(IsNotEmpty),
  bathRoomCount: z.number(IsNotEmpty),
  uai: z.boolean(IsNotEmpty),
  amenityIds: z.array(z.string()).nonempty({ message: 'Удобства обязательны' }),
  requestsIds: z.array(z.string()).nonempty({ message: 'Запросы обязательны' }),
  photosIds: z.array(z.string()).nonempty({ message: 'Фото обязательны' }),
  videoId: z.string().optional(),
  galleryId: z.string().optional(),
});

export const RoomCreateFormSchema = RoomSchema.omit({
  photosIds: true,
}).extend({
  files: z.array(fileSchema).nonempty({ message: 'Фото обязательны' }),
});

export type RoomDto = z.infer<typeof RoomSchema>;
export type RoomCreateFormInput = z.input<typeof RoomCreateFormSchema>;
export type RoomCreateFormValues = z.output<typeof RoomCreateFormSchema>;
