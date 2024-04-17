import { SinglePostAPI } from "@/lib/api-types";
import { Metadata } from "next";
import React from "react";

type MetadataProps = {
  params: { slug: string };
};

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();
  const keywordArr = postListData.data.post.seo.focuskw.split(" ");

  return {
    title: `${postListData.data.post.title} | ${process.env.title as string}`,
    description: "Generated by create next app",
    authors: [{ name: postListData.data.post.author.node.name }],
    keywords: keywordArr,
    openGraph: {
      title: `${postListData.data.post.title} | ${process.env.title as string}`,
      images: {
        url: postListData.data.post.featuredImage.node.sourceUrl,
        width: 800,
        height: 600,
        alt: postListData.data.post.slug,
      },
    },
  };
}

const SinglePostLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-auto mb-6">{children}</main>;
};

export default SinglePostLayout;
