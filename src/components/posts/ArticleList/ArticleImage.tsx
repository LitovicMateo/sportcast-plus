import Image from "next/image";

type ArticleImageProps = {
  url: string;
  slug: string;
};

const ArticleImage: React.FC<ArticleImageProps> = ({ slug, url }) => {
  return (
    <div className="relative aspect-[4/3] h-[240px] xs:h-[280px] md:w-auto md:h-[260px] lg:w-[400px]">
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        alt={slug}
        className="hover:scale-110 transition-all ease-linear"
      />
    </div>
  );
};

export default ArticleImage