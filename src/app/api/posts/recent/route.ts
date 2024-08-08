import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

if (!API_URL) {
  throw new Error("The API URL is not defined in the environment variables.");
}

const FETCH_POSTS_QUERY = `
  query FetchPosts($first: Int = 50) {
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
        author {
          node {
            name
          }
        }
        content
      }
    }
  }
`;

type FetchPostsResponse = {
  data?: {
    posts: {
      nodes: Array<{
        excerpt: string;
        featuredImage: { node: { sourceUrl: string } };
        id: string;
        date: string;
        slug: string;
        title: string;
        categories: { nodes: Array<{ name: string; slug: string }> };
        author: { node: { name: string } };
        content: string;
      }>;
    };
  };
  errors?: Array<{ message: string }>;
};

export async function GET(req: Request) {
  let data: FetchPostsResponse | null = null;

  try {
    const res = await fetch(API_URL, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: FETCH_POSTS_QUERY,
      }),
    });

    if (!res.ok) {
      console.error(`Fetch error: ${res.statusText}`);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: res.status },
      );
    }

    data = await res.json();

    if (data?.errors) {
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json(
        { error: "GraphQL error", details: data.errors },
        { status: 500 },
      );
    }
  } catch (error: any) {
    console.error("Request error:", error);
    return NextResponse.json({ error: "Request error" }, { status: 500 });
  }

  if (!data || !data.data) {
    return NextResponse.json({ error: "No data available" }, { status: 500 });
  }

  return NextResponse.json(data.data);
}
