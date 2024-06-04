import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@faustwp/core";

const PATH = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT

export function middleware(request: NextRequest) {
  console.log("Running middleware...");
  console.log(request.nextUrl.pathname);

  const {isReady} = useAuth()
  console.log(isReady);
  
  

  return NextResponse.redirect(`${PATH}/my-account`);
}

export const config = {
  matcher: '/preview/:slug'
}