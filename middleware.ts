import createMiddleware from "next-intl/middleware";
import {routing} from "./src/i18n/routing";
import {NextRequest, NextResponse} from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Explicitly handle root path redirect
  const pathname = request.nextUrl.pathname;
  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url, 307); // Temporary redirect
  }

  // Use next-intl middleware for all other paths
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames including root, except:
    // - API routes
    // - _next (Next.js internals)
    // - Static files (files with extensions)
    "/((?!api|_next|.*\\..*).*)",
  ],
};

