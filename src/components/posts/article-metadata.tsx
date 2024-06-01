import { SinglePostAPI } from "@/lib/api-types";
import React from "react";

type ArticleMetadataProps = {
    post: SinglePostAPI,
    date: string
}

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ post, date }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold pt-4 pb-2">{post.data.post.title}</h1>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold pb-1">Autor: {post.data.post.author.node.name}</h3>
        {/* <span className="text-[14px] font-[300]">{date}</span> */}
      </div>
    </>
  );
};

export default ArticleMetadata;
