import { PostAPI, SinglePostAPI } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeaturedPostProps = {
  post: PostAPI;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  console.log(post);

  return (
    <section>
      <Link className="w-full h-[500px] relative" href={`/${post.categories.nodes[0].slug}/${post.slug}`}>
        <Image
          className="aspect-auto w-full"
          src={post.featuredImage?.node.sourceUrl || "/fallback_cover.jpg"}
          height={post.featuredImage ? 600 : 100}
          width={post.featuredImage ? 1000 : 100}
          quality={100}
          alt={post.slug}
        />
        <h2 className="px-4 md:px-0 text-lg md:text-2xl">{post.title}</h2>
      </Link>
    </section>
  );
};

export default FeaturedPost;
