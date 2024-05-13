import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is empty!' })
    .email({ message: 'Email is invalid!' }),
  password: z.string().min(1, { message: 'Password is empty!' }),
});
