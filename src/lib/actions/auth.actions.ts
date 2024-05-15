'use server';

import z from 'zod';
import bcrypt from 'bcrypt';
import { signUpSchema } from '@/schemas';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  try {
    const validateFields = signUpSchema.safeParse(values);

    if (!validateFields.success) {
      throw new Error('Invalid fields');
    }

    const { name, lastName, email, password } = values;

    await connectToDB();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);

    const encryptedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      lastName,
      email,
      password: encryptedPassword,
    });
  } catch (err: any) {
    throw new Error(`Failed to create user: ${err.message}`);
  }
};
