import BreakLine from "@/components/UI/breakline";
import { transformParagraph } from "@/lib/transformParagraph";
import { Amiri, M_PLUS_1_Code, Merriweather } from "next/font/google";
import Link from "next/link";

const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });

type ArticleMetadataProps = {
  author: string;
  date: string;
  content: string;
  category: string;
  title: string;
  categoryUrl: string;
  slug: string;
};

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({
  author,
  content,
  date,
  category,
  categoryUrl,
  title,
  slug,
}) => {
  // add an ID to the <p> element and style it in global.css
  const clampedParagraph = transformParagraph(content, "excerpt");

  return (
    <div className="flex h-fit flex-col justify-between md:w-[60%]">
      <div>
        <Link href={`/${categoryUrl}`}>
          <h3
            className={`text-[12px] uppercase text-[#FF0000] ${mplus.className}`}
          >
            {category}
          </h3>
        </Link>
        <Link href={`${categoryUrl}/${slug}`}>
          <h2
            className={`text-wrap p-0 text-[18px] md:text-[24px] ${merriweather.className}`}
          >
            {title}
          </h2>
        </Link>
        <h4
          className={`pt-2 text-[12px] uppercase text-[#B9B9B9] md:text-[12px] ${mplus.className}`}
        >
          AUTOR: {author} | {date}
        </h4>
        <BreakLine />
      </div>
      <div
        className={`hidden overflow-hidden text-wrap text-[18px] leading-7 sm:block md:text-[16px] ${amiri.className}`}
        dangerouslySetInnerHTML={{ __html: clampedParagraph }}
      ></div>
    </div>
  );
};

export default ArticleMetadata;
