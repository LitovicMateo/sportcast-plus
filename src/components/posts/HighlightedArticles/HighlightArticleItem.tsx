import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

import { Aldrich, M_PLUS_1_Code, Merriweather, Amiri } from "next/font/google";
import { transformDate } from "@/lib/transformDate";
import Link from "next/link";
import HighlightedArticleImage from "./HighlightedArticleImage";
import HighlightMetadata from "./HighlightMetadata";

type ArticleListItemProps = {
  post: PostAPI;
};

const HighlightArticleItem: React.FC<ArticleListItemProps> = ({ post }) => {
  const date = transformDate(post.date);

  const clampedParagraph = post.excerpt.replace("<p>", "<p id='excerpt'>");

  return (
    <Link href={`${post.categories.nodes[0].slug}/${post.slug}`}>
      <div
        className="      
          w-full 
          flex flex-col md:flex-row md:px-0 gap-2 md:gap-4 
          h-fit xs:max-h-[500px] md:h-[260px] 
        "
      >
        <HighlightedArticleImage slug={post.slug} url={post.featuredImage.node.sourceUrl} />
        <HighlightMetadata author={post.author.node.name} date={date} excerpt={clampedParagraph} title={post.title} />
      </div>
    </Link>
  );
};

export default HighlightArticleItem;
