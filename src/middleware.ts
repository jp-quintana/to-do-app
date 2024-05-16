import { auth } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, landingRoutes } from '@/routes';

export const middleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isLandingRoute = landingRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isLandingRoute && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }

  if (!isLoggedIn && !isLandingRoute) {
    return Response.redirect(new URL('/sign-in', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
