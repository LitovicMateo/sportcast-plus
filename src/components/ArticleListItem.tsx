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
  const date = transformDate(post.date);

  console.log(post.author.node);
  

  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-0 gap-[6px] md:gap-6 h-fit md:h-[280px]">
      <div className="w-[500px] max-w-full h-[238px] md:h-full relative">
        <Image src={post.featuredImage.node.sourceUrl} fill alt={post.slug} objectFit="cover" />
      </div>
      <div className="w-[676px] max-w-full overflow-clip ">
        <h3 className={`uppercase text-[#FF0000] text-[12px] ${mplus.className}`}>{post.categories.nodes[0].name}</h3>
        <div>
          <h2 className={`text-wrap  p-0 text-[18px] md:text-[24px] ${merriweather.className}`}>{post.title}</h2>
          <BreakLine />
        </div>
        <h4 className={`text-[12px] md:text-[16px] text-[#B9B9B9] uppercase ${mplus.className}`}>
          AUTOR: {post.author.node.name || ""} | {date}
        </h4>
        <div
          className={`text-wrap text-[18px] hidden md:block leading-7 line-clamp-5 ${amiri.className}`}
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </div>
    </div>
  );
};

export default ArticleListItem;
