import React from "react";
import { transformParagraph } from "@/lib/transformParagraph";

import styles from "./ArticleContent.module.css";

type ArticleContentProps = {
  content: string;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const article = transformParagraph(content, "article");

  return (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: article }}
    ></article>
  );
};

export default ArticleContent;
