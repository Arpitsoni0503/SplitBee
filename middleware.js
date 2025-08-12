// middleware.js
// This middleware is used to protect routes(routes which will not be used by unauthorized users ) and handle Clerk authentication in a Next.js application.
//we provide the routes that we want to protect and the routes that we want to skip
// It uses Clerk's middleware to handle authentication and authorization.


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isProtectedRoute=createRouteMatcher([
  '/dashboard(.*)',//.* means whatever is there after /dashboard
  '/expenses(.*)',
  '/contacts(.*)',
  '/groups(.*)',
  '/person(.*)',
  '/settlements(.*)',
])

export default clerkMiddleware(async(auth,req)=>{
const {userId}=await auth();
if(!userId && isProtectedRoute(req)){
  // If the user is not authenticated and trying to access a protected route, redirect to sign-in page
  const { redirectToSignIn }=await auth();
  //The auth() helper returns the redirectToSignIn() method, which you can use to redirect the user to the sign-in page.
  return redirectToSignIn();
}
return NextResponse.next(); // Proceed to the next middleware or route handler
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};