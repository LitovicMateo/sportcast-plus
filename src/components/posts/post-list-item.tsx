import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

type PostGridItemProps = {
  post: PostAPI;
};

const PostGridItem: React.FC<PostGridItemProps> = ({ post }) => {
  return (
    <div className="w-full h-full relative bg-white rounded-b-sm border-b-2 border-solid border-gray-50">
      <div className="relative">
        <Image
          className=" aspect-video rounded-md"
          src={post.featuredImage?.node.sourceUrl || ""}
          height={300}
          width={500}
          alt={post.title}
        />
        <span className="absolute bottom-0 text-[8px] md:text-xs bg-brand text-accent font-semibold uppercase py-1 px-2 rounded-bl-md rounded-tr-md">
          {post.categories.nodes[0].name}
        </span>
      </div>
      <div className="flex items-center justify-between text-[8px] md:text-xs text-gray-400 ">
        <span className=" text-brand font-semibold uppercase py-1 px-2 rounded-bl-sm">12.04.2024</span>
      </div>
      <h2 className="py-1 px-2 text-sm md:text-base text-brand">{post.title}</h2>
    </div>
  );
};

export default PostGridItem;