import React from "react";
import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import { transformParagraph } from "@/lib/transformParagraph";

type ArticleContentProps = {
  post: SinglePostAPI;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ post }) => {
  const article = transformParagraph(post.data.post.content, "article");

  console.log(article);
  

  return (
    <article
      className="text-left leading-8"
      dangerouslySetInnerHTML={{ __html: article }}
    ></article>
  );
};

export default ArticleContent;
