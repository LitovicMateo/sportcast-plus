import React from "react";

import { Nokora, Anybody } from "next/font/google";

const nokora = Nokora({ subsets: ["latin"], weight: ["100"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

const YouTubeCTA = () => {
  return (
    <section className="bg-gradient-to-tr from-[#572222] to-[#740000] w-full px-4">
      <div className=" max-w-[1200px] w-full flex flex-col gap-4 py-6 md:flex-row mx-auto justify-between">
        <div className="text-center flex flex-col justify-center items-center text-white text-[24px] uppercase md:w-[40%]">
          <span className={`${nokora.className}`}>pretplati se na</span>
          <span className={`${anybody.className} text-[36px] lg:text-[42px]`}>sportcastplus</span>
          <span className={`${nokora.className}`}>youtube kanal</span>
        </div>
        <div className="rounded-md overflow-clip video-bg flex justify-start items-center">
          <iframe
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUon5iIws-cixVGo9QPjJI3w"
            className="w-full md:w-[700px] aspect-[16/10]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCTA;
