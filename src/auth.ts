import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { signInSchema } from './schemas';
import User from './lib/models/user.model';
import { connectToDB } from './lib/mongoose';
import bcrypt from 'bcryptjs';

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    signIn: async ({ user }) => {
      // console.log({ user });
      return true;
    },
    session: async ({ token: sessionToken, session }) => {
      if (session.user && sessionToken.sub) session.user.id = sessionToken.sub;
      if (session.user && sessionToken.lastName)
        session.user.lastName = sessionToken.lastName;

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user?.lastName) token.lastName = user.lastName;

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
  session: {
    strategy: 'jwt',
  },
});
