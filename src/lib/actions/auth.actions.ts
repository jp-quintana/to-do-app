'use server';

import z from 'zod';
import bcrypt from 'bcryptjs';
import { signInSchema, signUpSchema } from '@/schemas';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';

export const register = async (values: z.infer<typeof signUpSchema>) => {
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
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const login = async (values: z.infer<typeof signInSchema>) => {
  try {
    await signIn('credentials', {
      ...values,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return { error: 'Invalid Credentials' };
        }
        default: {
          return { error: 'Something went wrong' };
        }
      }
    }
    throw error;
  }
};
