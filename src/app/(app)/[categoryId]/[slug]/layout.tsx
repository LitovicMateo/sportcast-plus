import React from "react";

import { pageConfig } from "@/lib/configs/pageConfig";
import { Metadata, ResolvingMetadata } from "next";
import { fetchSinglePost, SinglePostAPI } from "@/app/actions/fetchSinglePost";

const { pageUrl } = pageConfig;

type MetadataProps = {
  params: { categoryId: string, slug: string };
};

export async function generateMetadata(
  props: MetadataProps,
): Promise<Metadata> {

  const { params } = props;
  try {
    const { slug } = params;
    const { post } = await fetchSinglePost(params.categoryId, params.slug);
    const keywordArr = post.seo.focuskw.split(" ");
    const title = post.title;
    const author = post.author.node.name;
    const category = post.categories.nodes[0].slug;

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
