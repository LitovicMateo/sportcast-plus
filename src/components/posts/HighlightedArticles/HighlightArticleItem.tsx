import React from "react";

import { transformDate } from "@/lib/transformDate";
import Link from "next/link";
import HighlightedArticleImage from "./HighlightedArticleImage";
import HighlightMetadata from "./HighlightMetadata";
import { PostData } from "@/lib/api-types";

type ArticleListItemProps = {
  post: PostData;
};

const HighlightArticleItem: React.FC<ArticleListItemProps> = ({ post }) => {
  const date = transformDate(post.date);

  const clampedParagraph = post.excerpt.replace("<p>", "<p id='excerpt'>");

  return (
    <Link href={`${post.categories.nodes[0].slug}/${post.slug}`} className=" w-full">
      <div
        className="      
        flex flex-col gap-4
        "
      >
        <HighlightedArticleImage slug={post.slug} url={post.featuredImage.node.sourceUrl} />
        <HighlightMetadata author={post.author.node.name} date={date} excerpt={clampedParagraph} title={post.title} />
      </div>
    </Link>
  );
};

export default HighlightArticleItem;
