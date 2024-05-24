import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

import { Anybody, Aldrich } from "next/font/google";
import Link from "next/link";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

type HeroProps = {
  posts: PostAPI[];
};

type HeroDataProps = {
  containerClass: string;
  category: string;
  title: string;
  titleClass: string;
  categoryClass: string;
};

const HeroData: React.FC<HeroDataProps> = ({ containerClass, category, title, titleClass, categoryClass }) => {
  return (
    <div
      className={`
        absolute w-full bottom-0 flex flex-col justify-end
         px-4 py-2
        bg-gradient-to-t from-[#000000] via-[#00000085] to-[#00000000] bg-opacity-75
        ${containerClass}
    `}
    >
      <span className={`text-[#C1B756] text-[10px] p-0 m-0 uppercase ${categoryClass} ${aldrich.className}`}>
        {category}
      </span>
      <h2
        className={`p-0 m-0 min-h-[20%] font-bold text-white text-[16px] uppercase ${titleClass} ${anybody.className}`}
      >
        {title}
      </h2>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ posts }) => {
  return (
    <section className="w-full flex flex-col sm:flex-row h-[700px] sm:h-[500px] lg:h-[800px] bg-yellow-400">
      <div className="relative w-full h-[300px] sm:h-full bg-blue-500">
        <Link href={`/${posts[0].categories.nodes[0].slug}/${posts[0].slug}`}>
          <Image src={posts[0].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" className="" />
          <HeroData
            containerClass="h-200px lg:h-[300px]"
            titleClass="text-[16px] lg:text-[32px]"
            categoryClass="text-[10px] lg:text-[24px]"
            title={posts[0].title}
            category={posts[0].categories.nodes[0].name}
          />
        </Link>
      </div>
      <div className="w-full h-[400px] sm:h-full flex flex-col bg-red-200">
        <div className="relative h-full w-full bg-green-300">
        <Link href={`/${posts[1].categories.nodes[0].slug}/${posts[1].slug}`}>
          <Image src={posts[1].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
          <HeroData
            containerClass="h-160px lg:h-[300px]"
            titleClass="text-[12px] lg:text-[24px]"
            categoryClass="text-[10px] lg:text-[18px]"
            title={posts[1].title}
            category={posts[1].categories.nodes[0].name}
            />
            </Link>
        </div>
        <div className="h-full w-full flex flex-row">
          <div className="relative w-full h-full bg-white">
            <Image src={posts[2].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
            <HeroData
              containerClass="h-120px lg:h-[300px]"
              titleClass="text-[10px] lg:text-[18px]"
              categoryClass="text-[8px] lg:text-[14px]"
              title={posts[2].title}
              category={posts[2].categories.nodes[0].name}
            />
          </div>
          <div className="relative w-full h-full">
            <Image src={posts[3].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
            <HeroData
              containerClass="h-120px lg:h-[300px]"
              titleClass="text-[10px] lg:text-[18px]"
              categoryClass="text-[8px] lg:text-[14px]"
              title={posts[3].title}
              category={posts[3].categories.nodes[0].name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
