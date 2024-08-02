import Image from "next/image";
import React from "react";

import styles from './ArticleGridImage.module.css'

type ArticleGridImageProps = {
  url: string;
  slug: string;
};

const ArticleGridImage: React.FC<ArticleGridImageProps> = ({ url, slug }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={url}
        layout="fill"
        alt={slug}
        objectFit="cover"
      />
    </div>
  );
};

export default ArticleGridImage;
