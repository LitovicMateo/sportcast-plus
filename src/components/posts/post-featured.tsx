import { PostAPI, SinglePostAPI } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeaturedPostProps = {
  post: PostAPI;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {

  return (
    <section>
      <Link className="w-full h-[500px] relative" href={`/${post.categories.nodes[0].slug}/${post.slug}`}>
        <div className="w-full h-full max-h-[450px] overflow-hidden flex justify-center items-center ">
          <Image
            className="aspect-auto w-full rounded-none"
            src={post.featuredImage?.node.sourceUrl || "/fallback_cover.jpg"}
            height={post.featuredImage ? 600 : 100}
            width={post.featuredImage ? 1000 : 100}
            quality={100}
            alt={post.slug}
          />
        </div>
        <h2 className="px-4 md:px-0 text-lg md:text-2xl">{post.title}</h2>
      </Link>
    </section>
  );
};

export default FeaturedPost;
