import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { signInSchema } from './schemas';
import User from './lib/models/user.model';
import { connectToDB } from './lib/mongoose';
import bcrypt from 'bcryptjs';

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    session: async ({ token: sessionToken, session }) => {
      console.log({ sessionToken, session });
      if (session.user && sessionToken.sub) session.user.id = sessionToken.sub;

      return session;
    },
    jwt: async ({ token, user }) => {
      console.log({ token });
      return token;
    },
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validateFields = signInSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          try {
            await connectToDB();
            const user = await User.findOne({ email });

            console.log({ user });

            if (!user || !user.password) return null;

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (passwordsMatch) return user;
          } catch (error) {
            console.log(error);
          }
        }

        return null;
      },
    }),
  ],
});
