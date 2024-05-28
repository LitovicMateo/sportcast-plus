import Image from "next/image";
import Link from "next/link";

type ArticleImageProps = {
  url: string;
  slug: string;
  category: string
};

const ArticleImage: React.FC<ArticleImageProps> = ({ slug, url, category }) => {
  return (
    <div className="relative aspect-[4/3] h-[240px] xs:h-[280px] md:w-auto md:h-[260px] lg:w-[400px]">
      <Link href={`${category}/${slug}`}>
        <Image src={url} layout="fill" objectFit="cover" alt={slug} className="" />
      </Link>
    </div>
  );
};

export default ArticleImage;
