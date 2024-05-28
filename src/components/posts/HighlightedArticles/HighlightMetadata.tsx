import { Aldrich, Amiri, M_PLUS_1_Code, Merriweather } from 'next/font/google';
import React from 'react'

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });


type HighlightMetadataProps = {
    title: string;
    author: string;
    date: string;
    excerpt: string
}

const HighlightMetadata: React.FC<HighlightMetadataProps> = ({author, date, excerpt, title}) => {
  return (
    <div className="w-full max-w-full overflow-clip">
    <div className="flex flex-col justify-end border-b-1 border-solid border-[#67676781]">
      <h2 className={`text-wrap text-[#FFFFFF] p-0 text-[18px] md:text-[24px]  ${merriweather.className}`}>
        {title}
      </h2>
      <span className={`text-[12px] md:text-[16px] py-[10px] text-[#B9B9B9] uppercase ${mplus.className}`}>
        AUTOR: {author} | {date}
      </span>
    </div>
    <div
      className={`text-wrap text-[14px] text-[#d1d1d1] leading-7 line-clamp-4 ${amiri.className}`}
      dangerouslySetInnerHTML={{ __html: excerpt }}
    ></div>
  </div>
)
}

export default HighlightMetadata