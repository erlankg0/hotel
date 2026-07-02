import { z } from 'zod';

export const IsNotEmpty = { message: 'Обязательное поле' };
export const fileSchema = z.custom<File>((value) => {
  if (typeof File === 'undefined') {
    return false;
  }

  return value instanceof File;
}, 'Некорректный файл');