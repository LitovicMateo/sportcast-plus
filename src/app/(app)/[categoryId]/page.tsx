import { fetchPostsByCategory } from "@/app/actions/fetchPostsByCategory";
import ArticleList from "@/components/ArticleList/List/ArticleList";
import React from "react";

interface PageProps {
  params: {
    categoryId: string;
  };
}

const SinglePostPage: React.FC<PageProps> = async ({ params }) => {

  const { categoryId } = params

  const posts = await fetchPostsByCategory(categoryId);

  return <ArticleList pagination articleOffset={4} posts={posts} />;


};

export default SinglePostPage;
