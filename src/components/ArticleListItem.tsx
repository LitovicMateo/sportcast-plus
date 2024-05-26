import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";
import BreakLine from "./UI/breakline";

import { Aldrich, M_PLUS_1_Code, Merriweather, Amiri } from "next/font/google";
import { transformDate } from "@/lib/transformDate";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });

type ArticleListItemProps = {
  post: PostAPI;
};

const FeaturedImage: React.FC<{ url: string; slug: string }> = ({ slug, url }) => {
  return (
    <div className="relative aspect-[4/3] h-[240px] xs:h-[280px] md:w-auto md:h-[260px] lg:w-[400px]">
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        alt={slug}
        className="hover:scale-110 transition-all ease-linear"
      />
    </div>
  );
};

const Metadata: React.FC<{ author: string; date: string; content: string; category: string; title: string }> = ({
  author,
  content,
  date,
  category,
  title,
}) => {

  // add an ID to the <p> element and style it in global.css
  const clampedParagraph = content.replace("<p>", "<p id='excerpt'>")

  return (
    <div className="flex flex-col justify-between h-fit md:w-[60%]">
      <div>
        <h3  className={`uppercase text-[#FF0000] text-[12px] ${mplus.className}`}>{category}</h3>
        <h2 className={`text-wrap p-0 text-[18px] md:text-[24px] ${merriweather.className}`}>{title}</h2>
        <h4 className={`text-[12px] pt-2 md:text-[16px] text-[#B9B9B9] uppercase ${mplus.className}`}>
          AUTOR: {author} | {date}
        </h4>
        <BreakLine />
      </div>
      <div
        className={`text-wrap text-[18px] md:text-[16px] hidden sm:block leading-7 line-clamp-2 overflow-hidden ${amiri.className}`}
        dangerouslySetInnerHTML={{ __html: clampedParagraph }}
      ></div>
    </div>
  );
};

const ArticleListItem: React.FC<ArticleListItemProps> = ({ post }) => {
  console.log(post.author.node.name);

  const date = transformDate(post.date);
  const authorName = post.author?.node?.name ?? "Unknown Author";
  const categoryName = post.categories?.nodes[0]?.name ?? "Uncategorized";

  return (
    <div className={`
      w-full 
      flex flex-col md:flex-row px-4 md:px-0 gap-2 md:gap-4 
      h-fit max-h-[400px] xs:max-h-[500px] md:h-[260px] 
      `}>
      <FeaturedImage slug={post.slug} url={post.featuredImage.node.sourceUrl} />
      <Metadata author={authorName} date={date} category={categoryName} content={post.excerpt} title={post.title} />
    </div>
  );
};

export default ArticleListItem;
