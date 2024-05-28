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
    <section className="flex flex-col gap-4 w-full px-6 py-4  bg-[#1D1D1D]">
      <div className="flex flex-row flex-wrap w-full justify-center items-start gap-[32px]">
        {posts.map((post) => (
          <HighlightArticleItem post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedArticles;
