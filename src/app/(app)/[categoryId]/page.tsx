import { fetchPostsByCategory } from "@/app/actions/fetchPostsByCategory";
import ArticleList from "@/components/ArticleList/List/ArticleList";
import { PostResponse } from "@/lib/api-types";
import React from "react";

interface PageProps {
  params: {
    categoryId: string;
  };
}

const SinglePostPage: React.FC<PageProps> = async ({ params }) => {

  try {

    const postListRes = await fetchPostsByCategory(params.categoryId);

    if (!postListRes.ok) {
      throw new Error("Failed to fetch posts");
    }

    const postListData: PostResponse["data"] = await postListRes.json();

    return <ArticleList pagination articleOffset={4} posts={postListData.posts.nodes} />;

  } catch (error) {
    console.error("Error fetching posts:", error);
    // Optionally, you can render an error message component here
    return <div>Error fetching posts. Please try again later.</div>;
  }
};

export default SinglePostPage;
