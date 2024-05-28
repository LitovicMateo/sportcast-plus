import BreakLine from "@/components/UI/breakline";
import { Amiri, M_PLUS_1_Code, Merriweather } from "next/font/google";

const mplus = M_PLUS_1_Code({ subsets: ["latin"], weight: ["400"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700"] });
const amiri = Amiri({ subsets: ["latin"], weight: ["400"] });


type ArticleMetadataProps = {
  author: string;
  date: string;
  content: string;
  category: string;
  title: string;
};

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ author, content, date, category, title }) => {
  // add an ID to the <p> element and style it in global.css
  const clampedParagraph = content.replace("<p>", "<p id='excerpt'>");

  return (
    <div className="flex flex-col justify-between h-fit md:w-[60%]">
      <div>
        <h3 className={`uppercase text-[#FF0000] text-[12px] ${mplus.className}`}>{category}</h3>
        <h2 className={`text-wrap p-0 text-[18px] md:text-[24px] ${merriweather.className}`}>{title}</h2>
        <h4 className={`text-[12px] pt-2 md:text-[16px] text-[#B9B9B9] uppercase ${mplus.className}`}>
          AUTOR: {author} | {date}
        </h4>
        <BreakLine />
      </div>
      <div
        className={`text-wrap text-[18px] md:text-[16px] hidden sm:block leading-7 line-clamp-2 overflow-hidden ${amiri.className}`}
        dangerouslySetInnerHTML={{ __html: clampedParagraph }}
      ></div>
    </div>
  );
};

export default ArticleMetadata;
