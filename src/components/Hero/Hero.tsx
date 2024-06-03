import Image from "next/image";
import React from "react";

import { Anybody, Aldrich } from "next/font/google";
import Link from "next/link";
import { PostData } from "@/lib/api-types";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

type HeroProps = {
  posts: PostData[];
};

type HeroDataProps = {
  containerClass: string;
  category: string;
  title: string;
  titleClass: string;
  categoryClass: string;
};

const ArticleImage = ({ url }: { url: string }) => {
  return (
    <Image
      src={url}
      alt="cover"
      layout="fill"
      objectFit="cover"
      className="transition-all hover:scale-105 ease-linear"
    />
  );
};

const HeroData: React.FC<HeroDataProps> = ({ containerClass, category, title, titleClass, categoryClass }) => {
  return (
    <div
      className={`
        absolute w-full bottom-0 flex flex-col justify-end h-[60%]
         px-4 py-2
        bg-gradient-to-t from-[#000000] via-[#0000005e] to-[#00000000] bg-opacity-75
        ${containerClass}
    `}
    >
      <span className={`text-[#C1B756] p-0 m-0 uppercase ${categoryClass} ${aldrich.className}`}>
        {category}
      </span>
      <h2
        className={`p-0 m-0 min-h-[20%] font-bold text-white uppercase ${titleClass} ${anybody.className}`}
      >
        {title}
      </h2>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ posts }) => {
  return (
    <section className="w-full flex flex-col sm:flex-row h-[700px] sm:h-[500px] lg:h-[600px] max-w-[1200px] bg-yellow-400 overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-full bg-blue-500 overflow-hidden">
        <Link href={`/${posts[0].categories.nodes[0].slug}/${posts[0].slug}`}>
          <ArticleImage url={posts[0].featuredImage.node.sourceUrl} />
          <HeroData
            containerClass="h-200px lg:h-[300px]"
            titleClass="text-[16px] lg:text-[32px]"
            categoryClass="text-[10px] lg:text-[24px]"
            title={posts[0].title}
            category={posts[0].categories.nodes[0].name}
          />
        </Link>
      </div>
      <div className="w-full h-[400px] sm:h-full flex flex-col bg-red-200 overflow-hidden">
        <div className="relative h-full w-full bg-green-300">
          <Link href={`/${posts[1].categories.nodes[0].slug}/${posts[1].slug}`}>
            <ArticleImage url={posts[1].featuredImage.node.sourceUrl} />
            <HeroData
              containerClass="h-160px lg:h-[300px]"
              titleClass="text-[16px] lg:text-[24px]"
              categoryClass="text-[10px] lg:text-[18px]"
              title={posts[1].title}
              category={posts[1].categories.nodes[0].name}
            />
          </Link>
        </div>
        <div className="h-full w-full flex flex-row overflow-hidden">
          <div className="relative w-full h-full bg-white overflow-hidden">
            <Link href={`/${posts[2].categories.nodes[0].slug}/${posts[2].slug}`}>
              <ArticleImage url={posts[2].featuredImage.node.sourceUrl} />
              <HeroData
                containerClass="h-120px lg:h-[300px]"
                titleClass="text-[14px] lg:text-[18px]"
                categoryClass="text-[8px] lg:text-[14px]"
                title={posts[2].title}
                category={posts[2].categories.nodes[0].name}
              />
            </Link>
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <Link href={`/${posts[3].categories.nodes[0].slug}/${posts[3].slug}`}>
              <ArticleImage url={posts[3].featuredImage.node.sourceUrl} />
              <HeroData
                containerClass="h-120px lg:h-[300px]"
                titleClass="text-[14px] lg:text-[18px]"
                categoryClass="text-[8px] lg:text-[14px]"
                title={posts[3].title}
                category={posts[3].categories.nodes[0].name}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
