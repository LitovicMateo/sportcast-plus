import React from "react";
import { transformDate } from "@/lib/transformDate";
import { PostData } from "@/lib/api-types";
import ArticleImage from "./ArticleImage";
import ArticleMetadata from "./ArticleMetadata";

import styles from "./ArticleListItem.module.css";

type ArticleListItemProps = {
  post: PostData;
};

const ArticleListItem: React.FC<ArticleListItemProps> = ({ post }) => {
  const date = transformDate(post.date);
  const authorName = post.author?.node?.name ?? "Unknown Author";
  const categoryName = post.categories?.nodes[0]?.name ?? "Uncategorized";

  return (
    <div className={styles.item}>
      <ArticleImage
        slug={post.slug}
        category={post.categories.nodes[0].slug}
        url={post.featuredImage.node.sourceUrl}
      />
      <ArticleMetadata
        id={post.id}
        slug={post.slug}
        author={authorName}
        date={date}
        category={categoryName}
        categoryUrl={post.categories.nodes[0].slug}
        content={post.excerpt}
        title={post.title}
      />
    </div>
  );
};

export default ArticleListItem;
