import Image from "next/image";
import React from "react";

import styles from './ArticleFeaturedImage.module.css'

type ArticleFeaturedImageProps = {
  imageUrl: string;
  slug: string;
};

const ArticleFeaturedImage: React.FC<ArticleFeaturedImageProps> = ({
  imageUrl,
  slug,
}) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={imageUrl}
        style={{objectPosition: "top", objectFit: "cover"}}
        fill
        alt={slug}
      />
    </div>
  );
};

export default ArticleFeaturedImage;
