import FeaturedImage from "@/components/posts/featured-image";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import Tag from "@/components/UI/tag";
import { SinglePostAPI } from "@/lib/api-types";
import React from "react";


const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const postListRes = await fetch(`http://localhost:3000/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();
  console.log(postListData);

  return (
    <>
      <FeaturedImage
        imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
        slug={postListData.data.post.slug}
      />
      <section className="px-4 max-w-[580px] md:max-w-[720px] mx-auto">
        <h1 className="text-2xl font-semibold pt-4 pb-2">{postListData.data.post.title}</h1>
        <h3 className="text-base font-semibold pb-1">Autor: {postListData.data.post.author.node.name}</h3>
        <BreakLine />
        <article
          className="leading-8 text-[#6b6565]"
          dangerouslySetInnerHTML={{ __html: postListData.data.post.content }}
        ></article>
        <BreakLine />
        <Tags tags={postListData.data.post.tags.nodes} />
      </section>
    </>
  );
};

export default SinglePostPage;
