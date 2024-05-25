import { PostAPI } from "@/lib/api-types";
import React from "react";
import HighlightArticleItem from "./HighlightArticleItem";

type HighlightedArticlesProps = {
  posts: PostAPI[];
};

const HighlightedArticles: React.FC<HighlightedArticlesProps> = ({ posts }) => {

    if (posts.length === 0) { return <div>Loading...</div>}
  return (
    <section className="w-full px-4 2xl:px-[5%] xl:px-[10%] py-8 lg:py-[128px] bg-[#1D1D1D]">
      <div className="flex flex-row flex-wrap w-full justify-center items-center gap-[32px]">
        {posts.map((post) => (
          <HighlightArticleItem post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default HighlightedArticles;
