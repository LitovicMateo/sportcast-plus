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
import { hasPreviewProps } from "@/lib/util/hasPreviewProps";
import { getAuthClient, getClient } from "@faustwp/experimental-app-router";
import Login from "@/components/auth/Login";
import { gql } from "@apollo/client";
import { PostData } from "@/lib/api-types";
import Article from "@/components/posts/SinglePost/Article";

type PageProps = {
  params: { slug: string; categoryId: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata(
//   props: PageProps,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const isPreview = hasPreviewProps(props);

//   const { params, searchParams } = props;
//   try {
//     const postListRes = await fetchSinglePost(
//       params.categoryId,
//       params.slug,
//       isPreview,
//     );
//     const postListData: SinglePostAPI = await postListRes.json();
//     const keywordArr = postListData.data.post.seo.focuskw.split(" ");

//     return {
//       metadataBase: new URL("https://www.sportcast.plus"),
//       title: `${postListData.data.post.title} | ${process.env.title as string}`,
//       authors: [{ name: postListData.data.post.author.node.name }],
//       keywords: keywordArr,
//       openGraph: {
//         title: `${postListData.data.post.title} | ${process.env.title as string}`,
//         type: "article",
//         url: `https://www.sportcast.plus/${postListData.data.post.categories.nodes[0].slug}/${params.slug}`,
//       },
//     };
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     // Optionally, return default metadata or an empty object
//     return {};
//   }
// }

const SinglePostPage: React.FC<PageProps> = async (props) => {
  const isPreview = hasPreviewProps(props);
  const id = props.searchParams.p;
  const client = isPreview ? await getAuthClient() : await getClient();

  if (!client) {
    return <Login />;
  }

  if (isPreview) {
    const { data }: { data: { contentNode: PostData } } = await client.query({
      query: gql`
        query GetContentNode(
          $id: ID!
          $idType: ContentNodeIdTypeEnum!
          $asPreview: Boolean!
        ) {
          contentNode(id: $id, idType: $idType, asPreview: $asPreview) {
            ... on NodeWithTitle {
              title
            }
            ... on NodeWithContentEditor {
              content
            }
            ... on NodeWithAuthor {
              author {
                node {
                  name
                }
              }
            }
            ... on Post {
              id
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              excerpt
              seo {
                focuskw
              }
              title
              date
              content
              featuredImage {
                node {
                  sourceUrl
                  slug
                }
              }
            }
          }
        }
      `,
      variables: {
        id,
        idType: isPreview ? "DATABASE_ID" : "URI",
        asPreview: isPreview,
      },
    });
    const date = transformDate(data.contentNode.date);
    console.log(data);
    return (
      <Article
        author={data.contentNode.author.node.name}
        categorySlug={data.contentNode.categories.nodes[0].slug}
        content={data.contentNode.content}
        date={date}
        image={data.contentNode.featuredImage.node.sourceUrl}
        isPreview={isPreview}
        slug={data.contentNode.slug}
        title={data.contentNode.title}
      />
    );
  } else {
    
    const { params, searchParams } = props;
    try {
      const response = await fetchSinglePost(params.categoryId, params.slug);
      const data: SinglePostAPI = await response.json();
      const date = transformDate(data.data.post.date);
      return (
        <Article
          author={data.data.post.author.node.name}
          categorySlug={data.data.post.categories.nodes[0].slug}
          content={data.data.post.content}
          date={date}
          image={data.data.post.featuredImage.node.sourceUrl}
          isPreview={isPreview}
          slug={data.data.post.slug}
          title={data.data.post.title}
        />
      );
    } catch (error) {
      console.error("Error fetching post data:", error);
      // Optionally, render an error message component here
      return <div>Error fetching post data. Please try again later.</div>;
    }
  }
};
export default SinglePostPage;
