import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import { isFetchError } from "@/lib/isFetchErrors";
import Hero from "@/components/Hero";
import ArticleList from "@/components/posts/ArticleList/ArticleList";
import HighlightedArticles from "@/components/posts/HighlightedArticles/HighlightedArticles";
import { getRecentPosts } from "../actions";


export default async function Home() {
  let postListData: FetchPostsAPI | null = null;
  let fetchError = { isError: false, message: "" };

  try {
    const postListRes = await getRecentPosts();

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
      {postListData?.posts.nodes &&
        <>
          <Hero posts={postListData!.posts.nodes} />
          <ArticleList posts={postListData!.posts.nodes.slice(4,8)} />
          <HighlightedArticles posts={postListData!.posts.nodes.slice(0,4)} />
        </>
      }
    </main>
  );
}
