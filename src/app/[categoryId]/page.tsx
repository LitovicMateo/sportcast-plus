import PostList from "@/components/posts/post-list";
import { FetchPostsAPI } from "@/lib/api-types";
import React from "react";

const SinglePostPage = async ({ params }: { params: { categoryId: string } }) => {
  const postListRes = await fetch(`http://localhost:3000/api/posts/category/${params.categoryId}`, { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();
  console.log(postListData);

  return (
    <div>
      <PostList posts={postListData.data.posts.nodes} />
    </div>
  );
};

export default SinglePostPage;
