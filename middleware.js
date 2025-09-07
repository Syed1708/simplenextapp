import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // const isTokenOk = Boolean(token)
  const isAdmin = token?.role == "admin";
  const isAdminPathName = req.nextUrl.pathname.startsWith("/dashboard/admin");
  const isUserPathName = req.nextUrl.pathname.startsWith("/dashboard");

  if (!token && isUserPathName) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  if (isAdminPathName && !isAdmin) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
