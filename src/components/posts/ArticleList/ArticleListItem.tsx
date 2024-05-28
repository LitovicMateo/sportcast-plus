import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";
import BreakLine from "../../UI/breakline";

import { Aldrich, M_PLUS_1_Code, Merriweather, Amiri } from "next/font/google";
import { transformDate } from "@/lib/transformDate";
import ArticleImage from "./ArticleImage";
import ArticleMetadata from "./ArticleMetadata";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });

type ArticleListItemProps = {
  post: PostAPI;
};




const ArticleListItem: React.FC<ArticleListItemProps> = ({ post }) => {
  console.log(post.author.node.name);

  const date = transformDate(post.date);
  const authorName = post.author?.node?.name ?? "Unknown Author";
  const categoryName = post.categories?.nodes[0]?.name ?? "Uncategorized";

  return (
    <div className={`
      w-full 
      flex flex-col md:flex-row px-4 md:px-0 gap-2 md:gap-4 
      h-fit max-h-[400px] xs:max-h-[500px] md:h-[260px] 
      `}>
      <ArticleImage slug={post.slug} category={post.categories.nodes[0].slug} url={post.featuredImage.node.sourceUrl} />
      <ArticleMetadata slug={post.slug} author={authorName} date={date} category={categoryName} categoryUrl={post.categories.nodes[0].slug} content={post.excerpt} title={post.title} />
    </div>
  );
};

export default ArticleListItem;
