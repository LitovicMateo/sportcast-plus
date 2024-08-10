import Hero from "@/components/Hero/Hero";
import YouTubeCTA from "@/components/SocialCTA/YouTubeCTA";
import InstagramCTA from "@/components/SocialCTA/InstagramCTA";
import { fetchRecentPosts } from "../actions/fetchRecentPosts";
import ArticleGrid from "@/components/ArticleList/Grid/ArticleGrid";
import ArticleList from "@/components/ArticleList/List/ArticleList";

import styles from "./Page.module.css";

export const revalidate = 0;

export default async function Home() {
  
  const posts = await fetchRecentPosts();

  const manifestPosts = posts!
    .filter((p) => p.categories.nodes[0].slug === "sportcastov-manifest")
    .slice(0, 4);

  const kolumnePosts = posts!
    .filter((p) => p.categories.nodes[0].slug === "kolumne")
    .slice(0, 4);

  return (
    <main className={styles.page}>
      {posts && (
        <>
          <Hero posts={posts!} />
          <ArticleList posts={posts!.slice(4, 8)} />
          <ArticleGrid posts={manifestPosts} />
          <ArticleList posts={posts!.slice(9, 12)} />
          <YouTubeCTA />
          <ArticleList posts={posts!.slice(13, 16)} />
          <ArticleGrid posts={kolumnePosts} />
          <ArticleList posts={posts!.slice(17, 20)} />
          <InstagramCTA />
          <ArticleList posts={posts!.slice(21, 24)} />
        </>
      )}
    </main>
  )
};