import React from "react";
import { PostData } from "@/lib/api-types";

import styles from './ArticleGrid.module.css'
import ArticleGridItem from "./ArticleGridItem";

type ArticleGridProps = {
  posts: PostData[];
};

const ArticleGrid: React.FC<ArticleGridProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.outerContainer}>
      <div className={styles.gridContainer}>
        {posts.map((post) => (
          <ArticleGridItem post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
