import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

type PostGridItemProps = {
  post: PostAPI;
};

const PostGridItem: React.FC<PostGridItemProps> = ({ post }) => {
  return (
    <div className="w-full h-full relative  hover:shadow-large bg-brand rounded-b-sm">
      <Image
        className=" aspect-video rounded-bl-none"
        src={post.featuredImage?.node.sourceUrl || ""}
        height={300}
        width={500}

        alt={post.title}
      />
      <div className="flex items-center justify-between text-[8px] md:text-xs text-gray-400 ">
        <span className="bg-accent text-brand font-semibold uppercase py-1 px-2 rounded-br-sm">Petak s Pajdom</span>
        <span className=" text-accent font-semibold uppercase py-1 px-2 rounded-bl-sm">12.04.2024</span>
      </div>
      <h2 className="py-1 px-2 text-sm md:text-lg text-accent">
        {post.title} 
      </h2>
    </div>
  );
};

export default PostGridItem;
