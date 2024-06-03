import React from "react";

import { Nokora, Anybody } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const nokora = Nokora({ subsets: ["latin"], weight: ["100"] });
const anybody = Anybody({ subsets: ["latin"], weight: ["600"] });

const InstagramCTA = () => {
  const array = new Array(6).fill(null);
  return (
    <section className="bg-gradient-to-tr from-[#522f49] to-[#330025] w-full">
      <div className="max-w-[1200px] w-full flex flex-col gap-4 py-6 px-4 md:flex-row mx-auto">
        <div className="text-center flex flex-col justify-center items-center text-white text-[24px] uppercase md:w-[70%]">
          <span className={`${nokora.className}`}>zaprati</span>
          <span className={`${anybody.className} text-[42px]`}>sportcastplus</span>
          <span className={`${nokora.className}`}>na instagramu</span>
        </div>
        <div className="overflow-clip relative grid grid-cols-3 w-full gap-2 max-w-[600px]">
          {array.map((_, index) => {
            return (
              <Link href={"https://www.instagram.com/sportcastplus/"} className="w-full aspect-square relative overflow-hidden">
                <Image src={`/instagram/instagram_${index + 1}.jpg`} fill alt="" objectFit="cover" className="hover:scale-105 hover:-rotate-1 ease-linear transition-all"/>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstagramCTA;
