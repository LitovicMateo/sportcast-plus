import { PostData } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeroItem.module.css";

type HeroItemProps = {
  article: PostData;
  elementClass: "hero" | "carousel";
};

const HeroItem: React.FC<HeroItemProps> = ({ article, elementClass }) => {
  const title = article.title;
  const category = article.categories.nodes[0].name;
  const slug = article.slug;
  const url = `/${category}/${slug}`;
  const imageUrl = article.featuredImage.node.sourceUrl;
  return (
    <Link href={url} className={styles[elementClass]}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={slug}
          fill
          style={{objectFit: "cover", objectPosition: "top"}}
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default HeroItem;
