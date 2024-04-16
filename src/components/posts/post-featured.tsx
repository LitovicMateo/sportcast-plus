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
        <Image className="aspect-auto" src={post.featuredImage.node.sourceUrl} height={600} width={1000} quality={100} alt={post.slug} />
        {/* <div className="absolute bottom-10 left-5 w-[700px] bg-slate-200 bg-opacity-70 p-2 rounded-md">
        <h2>{post.title}</h2>
      </div> */}
      </Link>
    </section>
  );
};

export default FeaturedPost;
