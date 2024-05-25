import PostList from "@/components/posts/post-list";
import { FetchPostsAPI } from "@/lib/api-types";
import React from "react";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

interface SinglePostPageProps {
  params: {
    categoryId: string;
  };
}

const SinglePostPage: React.FC<SinglePostPageProps> = async ({ params }) => {
  try {
    const postListRes = await fetch(`${apiEndpoint}/api/posts/category/${params.categoryId}`, { cache: "no-cache" });
    if (!postListRes.ok) {
      throw new Error("Failed to fetch posts");
    }
    const postListData: FetchPostsAPI = await postListRes.json();
    return <PostList posts={postListData.posts.nodes} />;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Optionally, you can render an error message component here
    return <div>Error fetching posts. Please try again later.</div>;
  }
};

export default SinglePostPage;
