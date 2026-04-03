import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Некорректный email" }),
  password: z.string()
    .min(6, { message: "Минимум 6 символов" })
    .regex(/[A-Z]/, { message: "Должна быть хотя бы одна заглавная буква" })
    .regex(/[0-9]/, { message: "Должна быть хотя бы одна цифра" }),
});

export type LoginDto = z.infer<typeof LoginSchema>;