import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from "./ArticleAd.module.css"

type ArticleAdProps = {
  imageSrc: string;
  alt: string;
  adTargetUrl: string
}


const ArticleAd: React.FC<ArticleAdProps> = ({ imageSrc, alt, adTargetUrl}) => {
  return (
    <Link href={adTargetUrl} target="_blank" className={styles.banner}>
    <Image
      src={imageSrc}
      alt={alt}
      fill
      objectFit="contain"
      objectPosition="center"
    />
  </Link>
)
}

export default ArticleAd