import Image from "next/image";
import React from "react";

type HighlightedArticleImageProps = {
  url: string;
  slug: string;
};

const HighlightedArticleImage: React.FC<HighlightedArticleImageProps> = ({ url, slug }) => {
  return (
    <div className="relative max-w-full h-[240px]">
      <Image
        className="hover:scale-110 transition-all ease-linear"
        src={url}
        layout="fill"
        alt={slug}
        objectFit="cover"
      />
    </div>
  );
};

export default HighlightedArticleImage;
