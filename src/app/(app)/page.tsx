import { isFetchError } from "@/lib/isFetchErrors";
import Hero from "@/components/Hero/Hero";
import ArticleList from "@/components/posts/ArticleList/ArticleList";
import HighlightedArticles from "@/components/posts/HighlightedArticles/HighlightedArticles";
import YouTubeCTA from "@/components/SocialCTA/YouTubeCTA";
import InstagramCTA from "@/components/SocialCTA/InstagramCTA";
import { fetchRecentPosts, RecentPostsData } from "../actions/fetchRecentPosts";
import { PostResponse } from "@/lib/api-types";
import ArticleGrid from "@/components/ArticleList/Grid/ArticleGrid";


export default async function Home() {
  let postListData: RecentPostsData["data"] | null = null;
  let fetchError = { isError: false, message: "" };

  try {
    const postListRes = await fetchRecentPosts();

    if (!postListRes.ok) {
      throw new Error(`Error: ${postListRes.statusText}`);
    }

    postListData = await postListRes.json();

    fetchError = isFetchError(postListData);
  } catch (error: any) {
    fetchError = { isError: true, message: error.message };
  }

  if (fetchError.isError) {
    return (
      <main className="flex min-h-screen flex-col items-center gap-8 pt-0 md:pt-12 md:pb-6">
        <div className="text-red-500">Failed to load posts: {fetchError.message}</div>
      </main>
    );
  }

  const manifestPosts = postListData!.posts.nodes.filter(p => p.categories.nodes[0].slug === "sportcastov-manifest").slice(0,4)
  const kolumnePosts = postListData!.posts.nodes.filter(p => p.categories.nodes[0].slug === "kolumne").slice(0,4)

  

  return (
    <main className="flex min-h-screen flex-col items-center pt-2">
      {postListData?.posts.nodes &&
        <>
          <Hero posts={postListData!.posts.nodes} />
          <ArticleList posts={postListData!.posts.nodes.slice(4,8)} />
          <ArticleGrid posts={manifestPosts} />
          <ArticleList posts={postListData!.posts.nodes.slice(9,12)} />
          <YouTubeCTA />
          <ArticleList posts={postListData!.posts.nodes.slice(13,16)} />
          <HighlightedArticles posts={kolumnePosts} />
          <ArticleList posts={postListData!.posts.nodes.slice(17,20)} />
          <InstagramCTA />
          <ArticleList posts={postListData!.posts.nodes.slice(21,24)} />
        </>
      }
    </main>
  );
}
