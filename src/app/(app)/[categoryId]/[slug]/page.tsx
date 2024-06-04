import { fetchSinglePost, SinglePostAPI } from "@/app/actions/fetchSinglePost";
import ArticleContent from "@/components/posts/SinglePost/ArticleContent";
import ArticleMetadata from "@/components/posts/article-metadata";
import BreadcrumbsMenu from "@/components/posts/breadcrumbs";
import FeaturedImage from "@/components/posts/SinglePost/FeaturedImage";
import ShareArticle from "@/components/posts/share-article";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import { transformDate } from "@/lib/transformDate";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const postListRes = await fetchSinglePost(params.slug);
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

const SinglePostPage: React.FC<PageProps> = async ({ params }) => {
  try {
    const postListRes = await fetchSinglePost(params.slug);
    const postListData: SinglePostAPI = await postListRes.json();
    const date = transformDate(postListData.data.post.date);

    return (
      <>
        <BreadcrumbsMenu post={postListData} />
        <FeaturedImage
          imageUrl={postListData.data.post.featuredImage.node.sourceUrl}
          slug={postListData.data.post.slug}
        />
        <section className="mx-auto max-w-[580px] px-4 md:max-w-[720px]">
          <ArticleMetadata
            author={postListData.data.post.author.node.name}
            title={postListData.data.post.title}
            date={date}
          />
          <BreakLine />
          <ArticleContent content={postListData.data.post.content} />
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
