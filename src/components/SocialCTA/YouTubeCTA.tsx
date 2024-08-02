import React from "react";

import styles from './YoutubeCTA.module.css'

import { Nokora, Anybody } from "next/font/google";

const nokora = Nokora({ subsets: ["latin"], weight: ["100"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

const YouTubeCTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <span className={`${nokora.className} ${styles.text}`}>pretplati se na</span>
          <span className={`${anybody.className} ${styles.highlight}`}>sportcastplus</span>
          <span className={`${nokora.className} ${styles.text}`}>youtube kanal</span>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUon5iIws-cixVGo9QPjJI3w"
            className={styles.video}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCTA;
