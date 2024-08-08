import React from "react";

import { pageConfig } from "@/lib/configs/pageConfig";
import { Metadata, ResolvingMetadata } from "next";
import { hasPreviewProps } from "@/lib/util/hasPreviewProps";
import { fetchSinglePost, SinglePostAPI } from "@/app/actions/fetchSinglePost";

const { pageCreator, pageDescription, pageKeywords, pageName, pageUrl } =
  pageConfig;

type PageProps = {
  params: { slug: string; categoryId: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const isPreview = hasPreviewProps(props);

  const { params, searchParams } = props;
  try {
    const { slug } = params;
    const postListRes = await fetchSinglePost(params.categoryId, params.slug);
    const postListData: SinglePostAPI = await postListRes.json();
    const keywordArr = postListData.data.post.seo.focuskw.split(" ");
    const title = postListData.data.post.title;
    const author = postListData.data.post.author.node.name;
    const category = postListData.data.post.categories.nodes[0].slug;

    return {
      metadataBase: new URL(pageUrl),
      title: `${title} | ${process.env.title as string}`,
      authors: [{ name: author }],
      keywords: keywordArr,
      openGraph: {
        title: `${title} | ${process.env.title as string}`,
        type: "article",
        url: `${pageUrl}/${category}/${slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    // Optionally, return default metadata or an empty object
    return {};
  }
}

const SinglePostLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-auto">{children}</main>;
};

export default SinglePostLayout;
