import { Kanit } from "next/font/google";
import Link from "next/link";
import React from "react";
import styles from './ArticleTagItem.module.css'

type ArticleTagItemProps = {
  tag: string;
};

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300"],
});

const ArticleTagItem: React.FC<ArticleTagItemProps> = ({ tag }) => {
  const tagSlug = tag.replace(" ", "-").toLowerCase();
  return (
    <div className={styles.tag}>
      <Link
        href={`/tag/${tagSlug}`}
        className={`${styles.label} ${kanit.className}`}
      >
        {tag.toUpperCase()}
      </Link>
    </div>
  );
};

export default ArticleTagItem;
