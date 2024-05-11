import MaxWidthContainer from '@/components/max-width-container';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export const Nav = () => {
  return (
    <div className="flex fixed top-0 w-full bg-white">
      <MaxWidthContainer className="mx-auto">
        <nav className="flex justify-between items-center py-3">
          <Link href="/" className="font-bold">
            Logo
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: 'ghost' })}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className={buttonVariants()}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </MaxWidthContainer>
    </div>
  );
};
