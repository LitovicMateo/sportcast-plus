import React from "react";
import FeaturedImage from "./FeaturedImage";
import ArticleMetadata from "../article-metadata";
import BreakLine from "@/components/UI/breakline";
import ArticleContent from "./ArticleContent";
import ShareArticle from "../share-article";
import Tags from "../tags";

type ArticleProps = {
  isPreview: boolean;
  categorySlug: string;
  date: string;
  author: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  tags?: Array<{ name: string }>;
};

const Article: React.FC<ArticleProps> = ({
  author,
  content,
  date,
  image,
  isPreview,
  slug,
  title,
  categorySlug,
  tags,
}) => {
  return (
    <>
      {isPreview && (
        <div className="mx-auto mb-8 w-fit max-w-[880px] rounded-md bg-red-200 px-4 py-4 text-center font-light">
          Preview page for <span className="font-bold">{title}</span>
        </div>
      )}
      <FeaturedImage imageUrl={image} slug={slug} />
      <section className="mx-auto max-w-[580px] px-4 md:max-w-[720px]">
        <ArticleMetadata author={author} title={title} date={date} />
        <BreakLine />
        <ArticleContent content={content} />
        <BreakLine />
        {!isPreview && (
          <>
            <ShareArticle
              url={`https://sportcast.plus/${categorySlug}/${slug}`}
            />
            <BreakLine />
            <Tags tags={tags!} />
          </>
        )}
      </section>
    </>
  );
};

export default Article;
