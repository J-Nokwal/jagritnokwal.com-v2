import { NextRequest, NextResponse, ProxyConfig } from "next/server";

export const config: ProxyConfig = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon1.png|icon2.png|apple-icon.png).*)",
  ],
};

export function proxy(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;

  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);

  return response;
}
