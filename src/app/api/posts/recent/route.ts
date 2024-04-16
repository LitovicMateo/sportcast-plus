import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET() {
  const query = `query FetchPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
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
