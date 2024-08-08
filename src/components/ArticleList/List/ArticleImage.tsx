import Image from "next/image";
import Link from "next/link";

import styles from "./ArticleImage.module.css";

type ArticleImageProps = {
  url: string;
  slug: string;
  category: string;
};

const ArticleImage: React.FC<ArticleImageProps> = ({ slug, url, category }) => {
  return (
    <div className={styles.container}>
      <Link href={`/${category}/${slug}`}>
        <Image
          src={url}
          fill
          alt={slug}
          style={{objectFit: "cover"}}
        />
      </Link>
    </div>
  );
};

export default ArticleImage;
