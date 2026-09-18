import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Me } from "./Actions/Auth";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const res = await Me();

  if (!res.success) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/projects/:path*",
    "/abilities/:path*",
    "/resume/:path*",
    "/messages/:path*",
    "/site-settings/:path*",
    "/settings/:path*",
  ],
};
