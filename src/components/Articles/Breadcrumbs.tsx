"use client";

import React from "react";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Breadcrumbs.module.css'
type BreadCrumbsMenuProps = {
  category: string;
  label: string
};

const Breadcrumbs: React.FC<BreadCrumbsMenuProps> = ({ label, category }) => {

  return (
    <div className={styles.container}>
        <Link className={styles.item} href={"/"}>Naslovnica</Link>
        <ArrowForwardIosIcon className={styles.icon} />
        <Link className={styles.item} href={`/${category}`}>{label}</Link>
    </div>
  );
};

export default Breadcrumbs;
