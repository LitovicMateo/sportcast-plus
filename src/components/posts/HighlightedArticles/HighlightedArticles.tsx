import { PostAPI } from "@/lib/api-types";
import React from "react";
import HighlightArticleItem from "./HighlightArticleItem";

type HighlightedArticlesProps = {
  posts: PostAPI[];
};

const HighlightedArticles: React.FC<HighlightedArticlesProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col gap-4 w-full px-4 md:px-8 py-6  bg-[#1D1D1D]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto justify-center md:justify-start items-start">
        {posts.map((post) => (
          <HighlightArticleItem post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedArticles;
