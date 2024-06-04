import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@faustwp/core";

const PATH =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export function middleware(request: NextRequest) {
  if (request.url.includes("/preview/")) {
    return NextResponse.next()
  }
  console.log("Running middleware...");
  const postId = (request.nextUrl.searchParams.get("preview_id"));
  console.log(`${PATH}/preview${request.nextUrl.pathname}?preview_id=${postId}`)

  if (postId) {
    return NextResponse.redirect(`${PATH}/preview${request.nextUrl.pathname}?preview_id=${postId}`)
  } else {
    return;
  }

}

export const config = {
  matcher: "/:slug*",
};
