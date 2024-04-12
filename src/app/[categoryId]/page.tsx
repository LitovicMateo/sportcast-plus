import { FetchPostsAPI } from "@/lib/api-types";
import React from "react";

const SinglePostPage = async ({ params }: { params: { categoryId: string } }) => {
  const postListRes = await fetch(`http://localhost:3000/api/posts/category/`, { cache: "no-store" });
  const postListData = await postListRes.json();
  console.log(postListData);

  return (
    <div>
      {/* <h1>{postListData.data.post.title}</h1> */}
    </div>
  );
};

export default SinglePostPage;
