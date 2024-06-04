import { SinglePostAPI } from "@/app/actions/fetchSinglePost";
import ArticleMetadata from "@/components/posts/article-metadata";
import ShareArticle from "@/components/posts/share-article";
import ArticleContent from "@/components/posts/SinglePost/ArticleContent";
import FeaturedImage from "@/components/posts/SinglePost/FeaturedImage";
import Tags from "@/components/posts/tags";
import BreakLine from "@/components/UI/breakline";
import { PostData } from "@/lib/api-types";
import { transformDate } from "@/lib/transformDate";
import { gql } from "@apollo/client";
import { WordPressTemplate } from "@faustwp/core";
import { getAuthClient, getClient } from "@faustwp/experimental-app-router";
import { redirect } from "next/navigation";

function hasPreviewProps(props: any) {
  return props?.searchParams?.preview === "true" && !!props?.searchParams?.p;
}

type PreviewProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type Data = {
  post: PostData;
};

const Preview: React.FC<PreviewProps> = async (props) => {
  console.log(props.params.slug);

  const isPreview = hasPreviewProps(props);

  const id = props.searchParams["preview_id"];
  console.log(props.searchParams);

  if (!id) {
    return redirect("/my-account");
  }

  let client = isPreview ? await getAuthClient() : await getClient();

  if (!client) {
    redirect("/wp-login");
  }

  const { data }: { data: Data } = await client!.query({
    query: gql`
    query GetPostPreview {
      post(id: ${id}, idType: DATABASE_ID) {
        date
        excerpt
        content
        slug
        title
        featuredImage {
          node {
            altText
            caption
            slug
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
        seo 
        {
          focuskw
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
    `,
  });

  console.log(data);

  const date = transformDate(data.post.date);
  console.log(date);

  return (
    <div>
      <div className="w-full py-4 bg-red-200 font-light rounded-md text-center mx-auto mb-8 max-w-[580px]">Preview page for {data.post.title}</div>
      <FeaturedImage
        imageUrl={data.post.featuredImage.node.sourceUrl}
        slug={data.post.slug}
      />
      <section className="mx-auto max-w-[580px] px-4 md:max-w-[720px]">
        <ArticleMetadata
          author={data.post.author.node.name}
          title={data.post.title}
          date={date}
        />
        <BreakLine />
        <ArticleContent content={data.post.content} />
        <BreakLine />
        <Tags tags={data.post.tags.nodes} />
      </section>{" "}
    </div>
  );
};

export default Preview;
