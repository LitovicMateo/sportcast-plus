import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import React from "react";

type ArticleMetadataProps = {
    title: string,
    author: string
    date: string
}

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ date, author, title }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold pt-4 pb-2">{title}</h1>
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold pb-1">Autor: {author}</h3>
        <span className="text-[14px] font-[300]">{date}</span>
      </div>
    </>
  );
};

export default ArticleMetadata;
