import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

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
    isAuthenticated = false;
  }

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
