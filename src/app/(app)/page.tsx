import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import FeaturedPost from "@/components/posts/post-featured";
import PostList from "@/components/posts/post-list";
import FeaturedVideo from "@/components/posts/featured-video";
import { isFetchError } from "@/lib/isFetchErrors";
import CategorySection from "@/components/posts/CategorySection";
import { navItems } from "@/lib/categories";
import Hero from "@/components/Hero";
import ArticleList from "@/components/ArticleList";
import HighlightedArticles from "@/components/HighlightedArticles";

// Update the API endpoint to fetch data from the desired API route
const apiEndpoint = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;
const apiRoute = '/api/posts/recent/';

export const revalidate = 0;

export default async function Home() {
  let postListData: FetchPostsAPI | null = null;
  let fetchError = { isError: false, message: "" };

  try {
    const postListRes = await fetch(`${apiEndpoint}${apiRoute}`, { cache: "no-store" });

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
      <main className="flex min-h-screen flex-col items-center gap-8 pt-0 md:pt-12 pb-6">
        <div className="text-red-500">Failed to load posts: {fetchError.message}</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-0 md:pt-12 pb-6">
      {!postListData ?
        <div>Loading...</div>
      : (
        <>
          <Hero posts={postListData!.posts.nodes} />
          <ArticleList posts={postListData!.posts.nodes} />
          {/* <HighlightedArticles posts={articles} /> */}
        </>
      )}
    </main>
  );
}
