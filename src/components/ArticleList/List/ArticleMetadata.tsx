import { Amiri, M_PLUS_1_Code, Merriweather } from "next/font/google";
import Link from "next/link";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import styles from "./ArticleMetadata.module.css";

const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });

type ArticleMetadataProps = {
  author: string;
  date: string;
  content: string;
  category: string;
  title: string;
  categoryUrl: string;
  slug: string;
  id: string;
};

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({
  author,
  content,
  date,
  category,
  categoryUrl,
  title,
  slug,
  id,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/${categoryUrl}`}>
          <h3 className={`${styles.category} ${mplus.className}`}>
            {category}
          </h3>
        </Link>
        <Link href={`/${categoryUrl}/${slug}?id=${id}`}>
          <h2 className={`${styles.title} ${merriweather.className}`}>
            {title}
          </h2>
        </Link>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <EditOutlinedIcon className={styles.icon} />
            <span>{author}</span>
          </div>
          <div className={styles.innerContainer}>
            <CalendarMonthOutlinedIcon className={styles.icon} />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.excerpt} ${amiri.className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default ArticleMetadata;
