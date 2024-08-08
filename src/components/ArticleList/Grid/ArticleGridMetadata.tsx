import {  Amiri,  Merriweather } from "next/font/google";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import styles from "./ArticleGridMetadata.module.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });

type ArticleGridMetadataProps = {
  title: string;
  author: string;
  date: string;
  excerpt: string;
};

const ArticleGridMetadata: React.FC<ArticleGridMetadataProps> = ({
  author,
  date,
  excerpt,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.metadataContainer}>
        <h2 className={`${styles.title} ${merriweather.className}`}>{title}</h2>
        <div className={styles.authorDate}>
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
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></div>
    </div>
  );
};

export default ArticleGridMetadata;
