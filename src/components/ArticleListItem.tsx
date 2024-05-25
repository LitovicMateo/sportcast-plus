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

const ArticleListItem: React.FC<ArticleListItemProps> = ({ post }) => {
  console.log(post.author.node.name);

  const date = transformDate(post.date);
  const authorName = post.author?.node?.name ?? "Unknown Author";
  const categoryName = post.categories?.nodes[0]?.name ?? "Uncategorized";

  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-0 gap-2 h-fit md:h-[280px]">
      <div className="w-full md:w-[500px] h-[238px] md:h-full relative">
        <Image
          src={post.featuredImage.node.sourceUrl}
          layout="fill"
          objectFit="cover"
          alt={post.slug}
          className="hover:scale-110 transition-all ease-linear"
        />
      </div>
      <div className="flex flex-col justify-between w-full md:w-[676px] overflow-hidden">
        <div>
          <h3 className={`uppercase text-[#FF0000] text-[12px] ${mplus.className}`}>{categoryName}</h3>
          <h2 className={`text-wrap p-0 text-[18px] md:text-[24px] ${merriweather.className}`}>{post.title}</h2>
          <h4 className={`text-[12px] pt-2 md:text-[16px] text-[#B9B9B9] uppercase ${mplus.className}`}>
            AUTOR: {authorName} | {date}
          </h4>
          <BreakLine />
        </div>
        <div
          className={`text-wrap text-[18px] hidden md:block leading-7 line-clamp-5 ${amiri.className}`}
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleListItem;
