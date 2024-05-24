import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

import { Aldrich, M_PLUS_1_Code, Merriweather, Amiri } from "next/font/google";
import { transformDate } from "@/lib/transformDate";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });

type ArticleListItemProps = {
  post: PostAPI;
};

const HighlightArticleItem: React.FC<ArticleListItemProps> = ({ post }) => {
  const date = transformDate(post.date);

  return (
    <div className="w-full h-[500px] 2xl:w-[662px] xl:w-[500px] md:w-[400px] flex flex-col px-4 md:px-0 gap-[12px] md:gap-6 lg:h-[680px]">
      <div className="w-full max-w-full h-[260px] lg:h-[378px] relative overflow-clip">
        <Image
          className="hover:scale-110 transition-all ease-linear"
          src={post.featuredImage.node.sourceUrl}
          layout="fill"
          alt={post.slug}
          objectFit="cover"
        />
      </div>
      <div className="w-[676px] max-w-full overflow-clip">
        <div className="min-h-[60px] flex flex-col justify-end">
          <h2
            className={`text-wrap text-[#FFFFFF] p-0 pb-[12px] text-[18px] md:text-[24px] border-b-1 border-solid border-[#67676781] ${merriweather.className}`}
          >
            {post.title}
          </h2>
        </div>
        <span
          className={`text-[12px] md:text-[16px] py-[10px] text-[#B9B9B9] uppercase ${mplus.className}`}
        >
          AUTOR: {post.author.node.name} | {date}
        </span>
        <div
          className={`text-wrap text-[14px] text-[#d1d1d1] leading-7 line-clamp-4 ${amiri.className}`}
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </div>
    </div>
  );
};

export default HighlightArticleItem;
