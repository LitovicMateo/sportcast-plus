import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET(req: Request) {
  console.log(req);
  
  const query = `query FetchPosts($first: Int = 50) {
    posts(first: $first) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        date
        slug
        title
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }`;

  let data;

  try {
    const res = await fetch(API_URL, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    });
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json(data);
}
