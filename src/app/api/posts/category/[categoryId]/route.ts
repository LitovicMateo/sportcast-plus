import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT as string;

export async function GET(req: Request, context: any) {
	const { params }: { params: { categoryId: string } } = context;
	console.log(params);
	console.log(req);

	let data;
	const query = `{
    posts(where: {categoryName: "${params.categoryId}"}) 
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
        date
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
	} catch (error) {}
	console.log(data);

  revalidatePath(req.url)
	return NextResponse.json(data);
}
