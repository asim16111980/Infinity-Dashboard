import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  const url = req.nextUrl;

  const isAuthPage = url.pathname.startsWith("/login");
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

  if (serverDown && !isServerErrorPage) {
    return NextResponse.redirect(new URL("/server-error", url));
  }

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", url));
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
