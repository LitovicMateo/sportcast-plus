import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import FeaturedPost from "@/components/posts/post-featured";
import PostGridItem from "@/components/posts/post-grid-item";

export default async function Home() {
  const postListRes = await fetch("http://localhost:3000/api/posts/recent/", { cache: "no-store" });
  const postListData: FetchPostsAPI = await postListRes.json();
  console.log(postListData);

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 pt-12 ">
      <section>
        <FeaturedPost post={postListData.data.posts.nodes[0]} />
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 w-full">
        {postListData.data.posts.nodes.map((post: PostAPI) => (
          <PostGridItem post={post} key={post.slug} />
        ))}
        {/* <iframe
          className="w-full h-full rounded-md col-start-2 row-start-1 col-span-2 row-span-2 hidden md:block"
          src="https://www.youtube.com/embed/Txo0I7TIU8E?si=DXPOdLF4tyrdgtqC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe> */}
      </section>
      <div className="w-full h-fit bg-brand">
        <h2 className="text-accent uppercase w-full text-center font-bold text-2xl px-4">Latest video</h2>
        <iframe
          className="w-full h-[500px] rounded-md p-4"
          src="https://www.youtube.com/embed/Txo0I7TIU8E?si=DXPOdLF4tyrdgtqC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </main>
  );
}

// featured post
// grid of posts
// sidebar
