import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET(req: Request, context: any) {
  const { params }: {params: {tagName: string}} = context;
  console.log(params);

  const query = `{
    posts(where: {categoryName: "${params.tagName}"}) 
    {
      nodes {
        excerpt
        featuredImage 
        {
          node 
          {
            sourceUrl
          }
        }
        id
        slug
        title
        categories 
        {
          nodes 
          {
            name
            slug
          }
        }
      }
    }
  }
  `;

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
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}