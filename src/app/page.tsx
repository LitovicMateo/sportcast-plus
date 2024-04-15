import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import FeaturedPost from "@/components/posts/post-featured";
import PostGridItem from "@/components/posts/post-list-item";
import PostList from "@/components/posts/post-list";

export default async function Home() {
  const postListRes = await fetch("http://localhost:3000/api/posts/recent/", { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();
  console.log(postListData);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-12 ">
      <section>
        <FeaturedPost post={postListData.data.posts.nodes[0]} />
      </section>
      <PostList posts={postListData.data.posts.nodes} />
      <div className="w-full h-fit pb-6 mb-4 bg-brand">
        <h2 className="text-accent uppercase w-full text-center font-bold text-2xl px-4">Latest video</h2>
        <iframe
        className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=j1U_Q2jY5uNupDIl&amp;list=PL2tSx9CeWRlz8_V-x4ymd5jn9Ndd7Ne4U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </main>
  );
}

// featured post
// grid of posts
// sidebar
