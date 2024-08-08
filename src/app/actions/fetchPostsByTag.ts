"use server";

import { Errors, PostData, PostResponse } from "@/lib/api-types";
import { normalizeString } from "@/lib/normalizeString";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export type TagResponse = {
  data: {
    tag: {
      posts: {
        nodes: PostData[];
      };
    };
  };
  errors?: Errors;
};

export const fetchPostsByTag = async (tag: string) => {
  const transformedTag = normalizeString(tag.replace("-", " "));

  const query = `
    {
      tag(id: "${transformedTag}", idType: NAME) {
        posts {
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
      }
    }
  `;

  const fetchOptions: RequestInit = {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(API_URL, fetchOptions);

    if (!response.ok) {
      console.error(`Error fetching data: ${response.statusText}`);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status },
      );
    }

    const data: TagResponse = await response.json();

    if (data.errors) {
      console.error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
      return NextResponse.json({ errors: data.errors }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error(`Network error: ${error.message}`);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
};
