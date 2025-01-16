import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

export default clerkMiddleware(async (auth, req, next) => { // Make the middleware async
  const protectedRoutes = createRouteMatcher([
    "/dashboard",
    "/dashboard/(.*)",
  ]);

  if (protectedRoutes(req)) {
    try {
      await auth().protect();
    } catch (error) {
      // Handle auth errors, e.g., redirect to login
      console.error("Authentication error:", error);
      return NextResponse.redirect(new URL('/sign-in', req.url)); // Redirect
    }
  }
  // Creating a basic response
  const response = NextResponse.next();

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};