import React from "react";
import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import { transformParagraph } from "@/lib/transformParagraph";

type ArticleContentProps = {
  content: string;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const article = transformParagraph(content, "article");

  return (
    <article
      className="text-left leading-8"
      dangerouslySetInnerHTML={{ __html: article }}
    ></article>
  );
};

export default ArticleContent;
