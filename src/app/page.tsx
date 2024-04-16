import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import FeaturedPost from "@/components/posts/post-featured";
import PostList from "@/components/posts/post-list";
import FeaturedVideo from "@/components/posts/featured-video";
import { isFetchError } from "@/lib/isFetchErrors";

export default async function Home() {
  const postListRes = await fetch("http://localhost:3000/api/posts/recent/", { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();
  console.log(postListData);

  const fetchError = isFetchError(postListData);
  console.log(fetchError.message);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-12 ">
      {fetchError.isError ? (
        <p>{fetchError.message}</p>
      ) : (
        <>
          <FeaturedPost post={postListData.data.posts.nodes[0]} />
          <PostList posts={postListData.data.posts.nodes} />
        </>
      )}
      <FeaturedVideo />
    </main>
  );
}
