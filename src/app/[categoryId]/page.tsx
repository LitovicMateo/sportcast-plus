import PostList from "@/components/posts/post-list";
import { FetchPostsAPI } from "@/lib/api-types";
import React from "react";

const apiEndpoint = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;


const SinglePostPage = async ({ params }: { params: { categoryId: string } }) => {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/category/${params.categoryId}`, { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();
  console.log(postListData);

  return (
    <div>
      <PostList posts={postListData.data.posts.nodes} />
    </div>
  );
};

export default SinglePostPage;
