import Image from "next/image";
import React from "react";

type FeaturedImageProps = {
  imageUrl: string;
  slug: string;
};

const FeaturedImage: React.FC<FeaturedImageProps> = ({ imageUrl, slug }) => {
  return (
    <div className="relative mx-auto flex aspect-[16/10] w-full max-w-[720px] items-center justify-center overflow-hidden">
      <Image
        src={imageUrl}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top"
        }}
        alt={slug}
      />
    </div>
  );
};

export default FeaturedImage;
