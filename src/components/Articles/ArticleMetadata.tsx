import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import styles from "./ArticleMetadata.module.css";

type ArticleMetadataProps = {
  title: string;
  author: string;
  date: string;
};

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({
  date,
  author,
  title,
}) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        <div className={styles.authorContainer}>
          <EditOutlinedIcon className={styles.icon} />
          <h3 className={styles.author}>{author}</h3>
        </div>
        <div className={styles.authorContainer}>
          <CalendarMonthOutlinedIcon className={styles.icon} />
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </>
  );
};

export default ArticleMetadata;
