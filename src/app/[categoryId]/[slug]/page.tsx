import FeaturedImage from "@/components/posts/featured-image";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import { SinglePostAPI } from "@/lib/api-types";
import React from "react";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();

  const date = new Date(postListData.data.post.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <>
      <FeaturedImage
        imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
        slug={postListData.data.post.slug}
      />
      <section className="px-4 max-w-[580px] md:max-w-[720px] mx-auto">
        <h1 className="text-2xl font-semibold pt-4 pb-2">{postListData.data.post.title}</h1>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold pb-1">Autor: {postListData.data.post.author.node.name}</h3>
          <span className="text-[14px] font-[300]">
            {day}/{month}/{year}
          </span>
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
