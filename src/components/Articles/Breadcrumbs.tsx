"use client";

import React from "react";
import Link from "next/link";
import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Breadcrumbs.module.css'
type BreadCrumbsMenuProps = {
  post: SinglePostAPI;
};

const Breadcrumbs: React.FC<BreadCrumbsMenuProps> = ({ post }) => {

    const category = post.data.post.categories.nodes[0].slug
    const label = post.data.post.categories.nodes[0].name
  return (
    <div className={styles.container}>
        <Link className={styles.item} href={"/"}>Naslovnica</Link>
        <ArrowForwardIosIcon className={styles.icon} />
        <Link className={styles.item} href={`/${category}`}>{label}</Link>
    </div>
  );
};

export default Breadcrumbs;
