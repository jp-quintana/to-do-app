'use client';

import { usePathname } from 'next/navigation';
import { SignInForm, SignUpForm } from './components';

export const AuthForm = () => {
  const pathname = usePathname();

  return pathname === '/sign-in' ? <SignInForm /> : <SignUpForm />;
};
