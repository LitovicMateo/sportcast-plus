import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function fetchSinglePost(slug: string) {
  const query = `query FetchSinglePost {
      post(id: "${slug}", idType: URI) {
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
