import ArticleContent from "@/components/posts/article-content";
import ArticleMetadata from "@/components/posts/article-metadata";
import BreadcrumbsMenu from "@/components/posts/breadcrumbs";
import FeaturedImage from "@/components/posts/featured-image";
import ShareArticle from "@/components/posts/share-article";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import { SinglePostAPI } from "@/lib/api-types";
import { transformDate } from "@/lib/transformDate";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  try {
    const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
    const postListData: SinglePostAPI = await postListRes.json();
    const keywordArr = postListData.data.post.seo.focuskw.split(" ");

    return {
      metadataBase: new URL("https://www.sportcast.plus"),
      title: `${postListData.data.post.title} | ${process.env.title as string}`,
      authors: [{ name: postListData.data.post.author.node.name }],
      keywords: keywordArr,
      openGraph: {
        title: `${postListData.data.post.title} | ${process.env.title as string}`,
        type: "article",
        url: `https://www.sportcast.plus/${postListData.data.post.categories.nodes[0].slug}/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Optionally, return default metadata or an empty object
    return {};
  }
}

const SinglePostPage: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  try {
    const postListRes = await fetch(`${apiEndpoint}/api/posts/${params.slug}/`, { cache: "no-store" });
    const postListData: SinglePostAPI = await postListRes.json();
    const date = transformDate(postListData.data.post.date);

    return (
      <>
        <BreadcrumbsMenu post={postListData} />
        <FeaturedImage
          imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
          slug={postListData.data.post.slug}
        />
        <section className="px-4 max-w-[580px] md:max-w-[720px] mx-auto">
          <ArticleMetadata post={postListData} date={date} />
          <BreakLine />
          <ArticleContent post={postListData} />
          <BreakLine />
          <ShareArticle
            url={`https://sportcast.plus/${postListData.data.post.categories.nodes[0].slug}/${postListData.data.post.slug}`}
          />
          <BreakLine />
          <Tags tags={postListData.data.post.tags.nodes} />
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching post data:", error);
    // Optionally, render an error message component here
    return <div>Error fetching post data. Please try again later.</div>;
  }
};

export default SinglePostPage;
