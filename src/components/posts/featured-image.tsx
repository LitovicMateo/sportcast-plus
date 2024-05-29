import Image from "next/image";
import React from "react";

type FeaturedImageProps = {
  imageUrl: string;
  slug: string;
};

const FeaturedImage: React.FC<FeaturedImageProps> = ({ imageUrl, slug }) => {
  return (
    <div className="relative w-full aspect-[16/10] max-w-[720px] mx-auto overflow-hidden flex justify-center items-center ">
      <Image className="aspect-auto w-full" src={imageUrl} fill objectFit="contain" objectPosition="top" alt={slug} />
    </div>
  );
};

export default FeaturedImage;
