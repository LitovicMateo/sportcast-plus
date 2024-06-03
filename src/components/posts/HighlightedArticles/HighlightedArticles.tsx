import React from "react";
import HighlightArticleItem from "./HighlightArticleItem";
import { PostData } from "@/lib/api-types";

type HighlightedArticlesProps = {
  posts: PostData[];
};

const HighlightedArticles: React.FC<HighlightedArticlesProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className="relative w-full px-4 md:px-8 py-6 lg:py-12 bg-[#1D1D1D]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto justify-center md:justify-start items-start">
        {posts.map((post) => (
          <HighlightArticleItem post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedArticles;
