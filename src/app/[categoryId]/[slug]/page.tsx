import FeaturedImage from "@/components/posts/featured-image";
import { FetchPostsAPI, SinglePostAPI } from "@/lib/api-types";
import React from "react";

const SinglePostPage = async ({ params }: { params: { slug: string } }) => {
  const postListRes = await fetch(`http://localhost:3000/api/posts/${params.slug}/`, { cache: "no-store" });
  const postListData: SinglePostAPI = await postListRes.json();
  console.log(postListData);

  return (
    <div className="h-full">
      <FeaturedImage
        imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
        slug={postListData.data.post.slug}
      />
      <h1 className="text-3xl font-semibold px-4 pt-4 pb-2">{postListData.data.post.title}</h1>
      <h3 className="text-lg font-semibold px-4 pb-1">Autor: {postListData.data.post.author.node.name}</h3>
      <article
        className="px-4 leading-8 text-[#6b6565]"
        dangerouslySetInnerHTML={{ __html: postListData.data.post.content }}
      ></article>
    </div>
  );
};

export default SinglePostPage;
