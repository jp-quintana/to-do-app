import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is empty!' }),
    lastName: z.string().min(1, { message: 'Last name is empty!' }),
    email: z
      .string()
      .min(1, { message: 'Email is empty!' })
      .email({ message: 'Email is invalid!' }),
    password: z.string().min(1, { message: 'Password is empty!' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Password must be confirmed!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match!",
    path: ['confirmPassword'],
  });
