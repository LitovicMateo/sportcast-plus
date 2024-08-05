import Image from "next/image";
import React from "react";

import styles from "./Hero.module.css";

import { Anybody, Aldrich } from "next/font/google";
import Link from "next/link";
import { PostData } from "@/lib/api-types";
import HeroItem from "./HeroItem";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

type HeroProps = {
  posts: PostData[];
};

type HeroDataProps = {
  containerClass: string;
  category: string;
  title: string;
  titleClass: string;
  categoryClass: string;
};

const Hero: React.FC<HeroProps> = ({ posts }) => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <HeroItem article={posts[0]}  elementClass="hero" />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <HeroItem article={posts[1]} elementClass="carousel" />
          <HeroItem article={posts[2]} elementClass="carousel" />
          <HeroItem article={posts[3]} elementClass="carousel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
