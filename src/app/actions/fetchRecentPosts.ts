"use server";

import { PostData } from "@/lib/api-types";
import { NextResponse } from "next/server";
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;
const query = `
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

if (!API_URL) {
  throw new Error("The API URL is not defined in the environment variables.");
}

export type RecentPostsData = {
  data?: {
    posts: {
      nodes: Array<PostData>;
    };
  };
  errors?: Array<{ message: string }>;
};

export const fetchRecentPosts = async () => {
  let data: RecentPostsData | null = null;
  const reqOptions: RequestInit = {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  try {
    const res = await fetch(API_URL, reqOptions);

    if (!res.ok) {
      console.error(`Fetch error: ${res.statusText}`);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: res.status },
      );
    }

    data = await res.json();
    console.log(data);
    

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
};
