import FeaturedImage from "@/components/posts/featured-image";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import { SinglePostAPI } from "@/lib/api-types";
import { transformDate } from "@/lib/transformDate";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();
  const keywordArr = postListData.data.post.seo.focuskw.split(" ");

  return {
    metadataBase: new URL("https://lime-panther-317414.hostingersite.com/"),
    title: `${postListData.data.post.title} | ${process.env.title as string}`,
    authors: [{ name: postListData.data.post.author.node.name }],
    keywords: keywordArr,
    other: {
      ["fb:app_id"]: "966242223397117"
    },
    openGraph: {
      title: `${postListData.data.post.title} | ${process.env.title as string}`,
      images: {
        secureUrl: postListData.data.post.featuredImage.node.sourceUrl,
        url: postListData.data.post.featuredImage.node.sourceUrl,
        width: 800,
        height: 600,
        alt: postListData.data.post.slug,
        type: "image/jpeg",
      },
      type: "website",
      url: `https://sportcast-plus.vercel.app/${postListData.data.post.categories.nodes[0].slug}/${postListData.data.post.title}`, 
    },
  };
}

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();
  const date = transformDate(postListData.data.post.date);

  return (
    <>
      <div className="w-full h-full max-h-[450px] overflow-hidden flex justify-center items-center ">
        <FeaturedImage
          imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
          slug={postListData.data.post.slug}
        />
      </div>
      <section className="px-4 max-w-[580px] md:max-w-[720px] mx-auto">
        <h1 className="text-2xl font-semibold pt-4 pb-2">{postListData.data.post.title}</h1>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold pb-1">Autor: {postListData.data.post.author.node.name}</h3>
          <span className="text-[14px] font-[300]">{date}</span>
        </div>
        <BreakLine />
        <article
          className="leading-8 text-[#6b6565] text-justify md:text-left"
          dangerouslySetInnerHTML={{ __html: postListData.data.post.content }}
        ></article>
        <BreakLine />
        <Tags tags={postListData.data.post.tags.nodes} />
      </section>
    </>
  );
};

export default SinglePostPage;
