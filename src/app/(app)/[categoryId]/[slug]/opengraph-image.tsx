import { ImageResponse } from "next/og";
import { fetchSinglePost, SinglePostAPI } from "@/app/actions/fetchSinglePost";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/jpeg";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

type MetadataProps = {
  params: { slug: string; categoryId: string };
};

export default async function OGImage({ params }: MetadataProps) {
  const postListRes = await fetchSinglePost(params.categoryId, params.slug);
  const postListData: SinglePostAPI = await postListRes.json();

  return new ImageResponse(
    (
      <div
        style={{
          height: "630px",
          width: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
        }}
      >
        <img
          style={{
            width: "100%",
            aspectRatio: "auto",
          }}
          src={postListData.data.post.featuredImage.node.sourceUrl}
        />
      </div>
    ),
  );
}
