'use server';

import z from 'zod';
import { signUpSchema } from '@/schemas';

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const validateFields = signUpSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: 'Success' };
};
