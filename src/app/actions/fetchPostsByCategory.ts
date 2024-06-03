"use server";

import { PostResponse } from "@/lib/api-types";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function fetchPostsByCategory(categoryId: string) {
  const query = `{
      posts(where: {categoryName: "${categoryId}"}) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          content
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
        }
      }
    }`;

  try {
    const res = await fetch(API_URL, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      console.error("Failed to fetch data:", res.statusText);
      return NextResponse.error();
    }

    const json: PostResponse = await res.json();

    revalidatePath(`/${categoryId}`);
    return NextResponse.json(json.data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return NextResponse.error();
  }
}
