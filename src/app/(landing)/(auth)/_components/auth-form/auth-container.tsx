'use client';

import { usePathname } from 'next/navigation';
import { SignInForm } from './sign-in-form';
import { SignUpForm } from './sign-up-form';

export const AuthContainer = () => {
  const pathname = usePathname();

  return pathname === '/sign-in' ? <SignInForm /> : <SignUpForm />;
};
