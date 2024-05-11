'use client';

import { usePathname } from 'next/navigation';

export const AuthForm = () => {
  const pathname = usePathname();

  console.log(pathname);
  return <div>AuthForm</div>;
};
