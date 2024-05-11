import Link from 'next/link';
import { MaxWidthContainer, ModeToggle } from '@/components';
import { buttonVariants } from '@/components/ui/button';

export const Nav = () => {
  return (
    <div className="flex fixed top-0 w-full bg-background">
      <MaxWidthContainer className="mx-auto">
        <nav className="flex justify-between items-center py-3">
          <Link href="/" className="font-bold">
            Logo
          </Link>
          <div className="flex gap-4 items-center">
            <ul className="flex gap-4">
              <li>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: 'outline' })}
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
            <div>
              <ModeToggle />
            </div>
          </div>
        </nav>
      </MaxWidthContainer>
    </div>
  );
};
