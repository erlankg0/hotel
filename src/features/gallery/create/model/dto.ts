import { z } from 'zod';

const fileSchema = z.custom<File>((value) => {
  if (typeof File === 'undefined') {
    return false;
  }

  return value instanceof File;
}, 'Некорректный файл');

export const GallerySchema = z.object({
  title: z
    .string()
    .min(3, 'Заголовок должен быть не менее 3 символов')
    .max(50, 'Слишком длинный заголовок'),

  fields: z
    .array(
      z.object({
        id: z.string(),
        url: z.string().url(),
      }),
    )
    .min(1, 'Добавьте хотя бы одну фотографию'),
});

export const GalleryCreateFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Заголовок должен быть не менее 3 символов')
    .max(50, 'Слишком длинный заголовок'),
  files: z
    .array(fileSchema)
    .min(1, 'Добавьте хотя бы один файл'),
});

export type GalleryDto = z.infer<typeof GallerySchema>;
export type GalleryCreateFormValues = z.infer<typeof GalleryCreateFormSchema>;
