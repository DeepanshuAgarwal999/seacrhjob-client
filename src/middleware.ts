import middleware from 'next-auth/middleware';

export { middleware as default };

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|auth|$).*)",
  ],
};