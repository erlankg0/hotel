import { z } from 'zod';

import { Category } from './const';

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

export const RoomUpdateFormSchema = RoomSchema.omit({
  photosIds: true,
}).extend({
  photosIds: z.array(z.string()),
  files: z.array(fileSchema).default([]),
}).refine(
  (data) => data.photosIds.length > 0 || data.files.length > 0,
  { message: 'Должно остаться хотя бы одно фото', path: ['files'] },
);

export type RoomDto = z.infer<typeof RoomSchema>;
export type RoomCreateFormInput = z.input<typeof RoomCreateFormSchema>;
export type RoomCreateFormValues = z.output<typeof RoomCreateFormSchema>;
export type RoomUpdateFormInput = z.input<typeof RoomUpdateFormSchema>;
export type RoomUpdateFormValues = z.output<typeof RoomUpdateFormSchema>;
