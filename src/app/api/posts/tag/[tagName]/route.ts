import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET(req: Request, context: any) {
  const { params }: { params: { tagName: string } } = context;
  const tag = params.tagName.replace("-", " ");

  let data;
  const query = `
    {
      tag(id: "${tag}", idType: NAME) 
      {
        posts 
        {
          nodes 
          {
            title
            date
            excerpt
            slug
            featuredImage 
            {
              node 
              {
                sourceUrl
              }
            }
            categories 
            {
              nodes 
              {
                name
                slug
              }
            }
            author 
            {
              node 
              {
                name
              }
            }
          }
        }    
      } 
    }
 `;

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

  console.log(data);
  

  return NextResponse.json(data);
}
