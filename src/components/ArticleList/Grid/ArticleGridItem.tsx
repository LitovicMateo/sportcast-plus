import React from "react";

import { transformDate } from "@/lib/transformDate";
import Link from "next/link";
import { PostData } from "@/lib/api-types";

import styles from "./ArticleGridItem.module.css";
import ArticleGridImage from "./ArticleGridImage";
import ArticleGridMetadata from "./ArticleGridMetadata";

type ArticleGridItemProps = {
  post: PostData;
};

const ArticleGridItem: React.FC<ArticleGridItemProps> = ({ post }) => {
  const date = transformDate(post.date);

  const clampedParagraph = post.excerpt.replace("<p>", "<p id='excerpt'>");

  const url = `${post.categories.nodes[0].slug}/${post.slug}`;

  return (
    <Link href={url} className="w-full">
      <div className={styles.item}>
        <ArticleGridImage
          slug={post.slug}
          url={post.featuredImage.node.sourceUrl}
        />
        <ArticleGridMetadata
          author={post.author.node.name}
          date={date}
          excerpt={clampedParagraph}
          title={post.title}
        />
      </div>
    </Link>
  );
};

export default ArticleGridItem;
