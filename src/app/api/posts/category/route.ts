import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET(req: Request, context: any) {
  const { params } = context;
  console.log(params);

  const query = `{
    posts(where: {categoryName: "Blog"}) {
      nodes {
        title
        slug
        date
        author {
          node {
            name
          }
        }
      }
    }
  }`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  });
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}
