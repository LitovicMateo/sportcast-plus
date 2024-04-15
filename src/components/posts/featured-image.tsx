import Image from "next/image";
import React from "react";

type FeaturedImageProps = {
  imageUrl: string;
  slug: string;
};

const FeaturedImage: React.FC<FeaturedImageProps> = ({ imageUrl, slug }) => {
  return <Image className="aspect-auto w-full" src={imageUrl} width={1000} height={300} alt={slug} />;
};

export default FeaturedImage;
