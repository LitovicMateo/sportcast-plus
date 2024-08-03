import styles from "./Article.module.css";
import ArticleContent from "./ArticleContent";
import ArticleFeaturedImage from "./ArticleFeaturedImage";
import ArticleMetadata from "./ArticleMetadata";
import ArticleShare from "./ArticleShare";
import ArticleTags from "./ArticleTags";

type ArticleProps = {
  isPreview: boolean;
  categorySlug: string;
  date: string;
  author: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  tags?: Array<{ name: string }>;
};

const Article: React.FC<ArticleProps> = ({
  author,
  content,
  date,
  image,
  isPreview,
  slug,
  title,
  categorySlug,
  tags,
}) => {
  return (
    <>
      {isPreview && (
        <div className={styles.previewContainer}>
          Preview page for <span className={styles.previewTitle}>{title}</span>
        </div>
      )}
      <ArticleFeaturedImage imageUrl={image} slug={slug} />
      <section className={styles.content}>
        <ArticleMetadata author={author} title={title} date={date} />
        <ArticleContent content={content} />
      </section>
      {!isPreview && (
        <>
          <ArticleTags tags={tags!} />
          <ArticleShare
            url={`https://sportcast.plus/${categorySlug}/${slug}`}
          />
        </>
      )}
    </>
  );
};

export default Article;
