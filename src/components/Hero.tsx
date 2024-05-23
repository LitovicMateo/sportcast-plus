import { PostAPI } from "@/lib/api-types";
import Image from "next/image";
import React from "react";

import { Anybody, Aldrich } from "next/font/google";

const aldrich = Aldrich({ subsets: ["latin"], weight: ["400"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

type HeroProps = {
  posts: PostAPI[];
};

type HeroDataProps = {
  height: string;
  category: string;
  title: string;
  titleSize: string;
  categorySize: string;
};

const HeroData: React.FC<HeroDataProps> = ({ height, category, title, titleSize, categorySize }) => {
  return (
    <div
      className={`
        absolute w-full bottom-0 flex flex-col justify-end
         px-4 py-2
        bg-gradient-to-t from-[#000000] via-[#00000085] to-[#00000000] bg-opacity-75
    `}
      style={{ height: height }}
    >
      <span
        style={{ fontSize: categorySize }}
        className={`text-[#C1B756] text-[10px] p-0 m-0 uppercase ${aldrich.className}`}
      >
        {category}
      </span>
      <h2
        style={{ fontSize: titleSize }}
        className={`p-0 m-0 min-h-[20%] font-bold text-white text-[16px] uppercase ${anybody.className} ${titleSize === "10px" ? "leading-3" : "leading-4"}`}
      >
        {title}
      </h2>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ posts }) => {
  return (
    <section className="w-full flex flex-col sm:flex-row h-[700px] bg-yellow-400">
      <div className="relative w-full h-[300px] bg-blue-500">
        <Image src={posts[0].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
        <HeroData
          height={"200px"}
          titleSize="16px"
          categorySize="10px"
          title={posts[0].title}
          category={posts[0].categories.nodes[0].name}
        />
      </div>
      <div className="w-full h-[400px] flex flex-col bg-red-200">
        <div className="relative h-full w-full bg-green-300">
          <Image src={posts[1].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
          <HeroData
            height={"160px"}
            titleSize="12px"
            categorySize="10px"
            title={posts[1].title}
            category={posts[1].categories.nodes[0].name}
          />
        </div>
        <div className="h-full w-full flex flex-row">
          <div className="relative w-full h-full bg-white">
            <Image src={posts[2].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
            <HeroData
              height={"120px"}
              titleSize="10px"
              categorySize="8px"
              title={posts[2].title}
              category={posts[2].categories.nodes[0].name}
            />
          </div>
          <div className="relative w-full h-full">
            <Image src={posts[3].featuredImage.node.sourceUrl} alt="cover" layout="fill" objectFit="cover" />
            <HeroData
              height={"120px"}
              titleSize="10px"
              categorySize="8px"
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
