import React from "react";
import ArticleTagItem from "./ArticleTagItem";

import styles from './ArticleTags.module.css'

type ArticleTagsProps = {
  tags: {
    name: string;
  }[];
};

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <ArticleTagItem tag={tag.name} key={tag.name} />
      ))}
    </div>
  );
};

export default ArticleTags;
