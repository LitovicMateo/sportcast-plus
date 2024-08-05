import { NextRequest, NextResponse } from "next/server";

const PATH =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export function middleware(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("p");

  if (id) {
    return NextResponse.redirect(
      `${PATH}/category/preview?p=${id}&preview=true`,
    );
  }
}

export const config = {
  matcher: "/",
};
