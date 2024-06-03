import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeaturedPostProps = {
  post: PostAPI;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Link href={`/${post.categories.nodes[0].slug}/${post.slug}`}>
      <div className="flex aspect-[16/10] relative w-full items-center justify-center overflow-hidden">
        <Image
          src={post.featuredImage?.node.sourceUrl || "/fallback_cover.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt={post.slug}
        />
      </div>
      <h2 className="px-4 text-lg md:px-0 md:text-2xl">{post.title}</h2>
    </Link>
  );
};

export default FeaturedPost;
