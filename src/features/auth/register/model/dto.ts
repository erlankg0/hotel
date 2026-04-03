import { z } from 'zod';

export const RegisterSchema = z.object({
  username: z.string({ message: 'Объязательное поле' }).min(6, { message: 'Должен содержать минимум 6 символов' }),
  firstName: z.string({ message: 'Объязательное поле' }).min(4, { message: 'Должен содержать минимум 4 символов' }),
  lastName: z.string({ message: 'Объязательное поле' }).min(4, { message: 'Должен содержать минимум 4 символов' }),
  email: z.string().email({ message: 'Некорректный email' }),
  password: z.string()
    .min(6, { message: 'Минимум 6 символов' })
    .regex(/[A-Z]/, { message: 'Должна быть хотя бы одна заглавная буква' })
    .regex(/[0-9]/, { message: 'Должна быть хотя бы одна цифра' }),
});

export type RegisterDto = z.infer<typeof RegisterSchema>;
