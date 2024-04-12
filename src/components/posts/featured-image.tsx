import Image from 'next/image'
import React from 'react'

type FeaturedImageProps = {
    imageUrl: string;
    slug: string
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ imageUrl, slug }) => {
  return (
    <div>
        <Image src={imageUrl} width={1000} height={300} alt={slug} />
    </div>
  )
}

export default FeaturedImage