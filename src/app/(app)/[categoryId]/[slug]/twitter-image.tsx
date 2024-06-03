import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
  }
export const contentType = 'image/jpeg'

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

type MetadataProps = {
  params: { slug: string };
};


export default async function OGImage({params}: MetadataProps) {

    const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
    const postListData: SinglePostAPI = await postListRes.json();
  
    console.log(postListData.data.post.featuredImage.node.sourceUrl);
  

    return new ImageResponse(<div style={{
        height: "630px",
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px"
    }}>
        <img 
            style={{
                width: "100%",
                aspectRatio: "auto"
            }}
            src={postListData.data.post.featuredImage.node.sourceUrl} />
    </div>)
}