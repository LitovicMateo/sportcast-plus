import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import FeaturedPost from "@/components/posts/post-featured";
import PostList from "@/components/posts/post-list";
import FeaturedVideo from "@/components/posts/featured-video";
import { isFetchError } from "@/lib/isFetchErrors";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export default async function Home() {
  const postListRes = await fetch(`${apiEndpoint}/api/posts/recent/`, { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();

  const fetchError = isFetchError(postListData);

  // posts 2-7
  const firstSectionPosts = postListData.data.posts.nodes.slice(1, 6);
  console.log(firstSectionPosts);

  // posts 8-13
  const secondSectionPosts = postListData.data.posts.nodes.slice(6, 6);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-12 ">
      {!fetchError.isError && 
        <>
          <FeaturedPost post={postListData.data.posts.nodes[0]} />
          <PostList posts={firstSectionPosts} />
        </>
      }
      <FeaturedVideo />
      <PostList posts={secondSectionPosts} />
    </main>
  );
}
