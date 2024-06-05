import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@faustwp/core";
import { cookies } from "next/headers";

const PATH =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export function middleware(request: NextRequest) {

  const id = request.nextUrl.searchParams.get("p")
  console.log(id);
  
  if (id) {
    return NextResponse.redirect(`${PATH}/category/preview?p=${id}&preview=true`)
  }

  // const ckis = cookies().getAll()

  // console.log(ckis);
  // // check for auth cookie
  // if (!!ckis.find(token => token.name === "https://lime-panther-317414.hostingersite.com-rt")) {
  //   console.log("Authorized");
  // } else {
  //   console.log("Unauthorized!");
    
  // }
  


  // if (request.url.includes("/preview/")) {
  //   return NextResponse.next()

  // }
  // console.log("Running middleware...");
  // const postId = (request.nextUrl.searchParams.get("preview_id"));
  // console.log(`${PATH}/preview${request.nextUrl.pathname}?preview_id=${postId}`)

  // if (postId) {
  //   return NextResponse.redirect(`${PATH}/preview${request.nextUrl.pathname}?preview_id=${postId}`)
  // } else {
  //   return;
  // }

}

export const config = {
  matcher: "/",
};
