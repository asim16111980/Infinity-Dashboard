import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  const url = req.nextUrl;

  const isAuthPage = url.pathname.startsWith("/login");
  const isPasswordResetPage = url.pathname.startsWith("/reset-password");
  const isServerErrorPage = url.pathname.startsWith("/server-error");

  let serverDown = false;
  let isAuthenticated = false;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
      {
        headers: { cookie: cookieHeader },
      }
    );

    if (res.ok) {
      const resData = await res.json();
      isAuthenticated = resData.status === "success";
    }
  } catch {
    serverDown = true;
  }

  if (serverDown) {
    if (!isServerErrorPage) {
      return NextResponse.redirect(new URL("/server-error", url));
    }
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    
    console.log(isAuthPage,isPasswordResetPage);
    if (!isAuthPage) {
      console.log(isAuthPage,isPasswordResetPage);
    return NextResponse.redirect(new URL("/login", url));
  }
  return NextResponse.next();
}

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico).*)",
  ],
};
