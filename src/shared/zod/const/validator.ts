import { z } from 'zod';

export const IsNotEmpty = { message: 'Обязательное поле' };

export const fileSchema = z.custom<File>((value) => {
  if (typeof File === 'undefined') {
    return false;
  }

  return value instanceof File;
}, 'Некорректный файл');

export const phoneValidator = z
  .string()
  .transform((val) => val.replace(/\s/g, ''))
  .refine((val) => /^[0-9+]{7,20}$/.test(val), {
    message: 'Некорректный номер телефона',
  });