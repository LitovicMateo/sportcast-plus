"use server"

import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export interface SinglePostAPI {
  data: {
    post: {
      date: string;
      excerpt: string;
      content: any;
      slug: string;
      title: string;
      featuredImage: {
        node: {
          sourceUrl: string;
          altText: string;
          slug: string;
          caption: string;
        };
      };
      author: {
        node: {
          name: string;
        };
      };
      tags: {
        nodes: {
          name: string;
        }[];
      };
      seo: {
        focuskw: string;
      };
      categories: {
        nodes: {
          name: string;
          slug: string;
        }[];
      };
    };
  };
}

export async function fetchSinglePost(category:string, slug: string) {
  const query = `query FetchSinglePost {
      post(id: "${category}/${slug}", idType: URI) {
        date
        excerpt
        content
        slug
        title
        featuredImage {
          node {
            altText
            caption
            slug
            sourceUrl
          }
        }
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
        seo 
        {
          focuskw
        }
        tags {
          nodes {
            name
          }
        }
      }
    }`;

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

  const data: SinglePostAPI = await res.json();

  return NextResponse.json(data);
}
