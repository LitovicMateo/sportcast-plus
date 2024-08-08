import ArticleContent from "@/components/Articles/ArticleContent";
import ArticleFeaturedImage from "@/components/Articles/ArticleFeaturedImage";
import ArticleMetadata from "@/components/Articles/ArticleMetadata";
import ArticleTags from "@/components/Articles/ArticleTags";
import { PostData } from "@/lib/api-types";
import { transformDate } from "@/lib/transformDate";
import { gql } from "@apollo/client";
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
  const isPreview = hasPreviewProps(props);

  const id = props.searchParams["preview_id"];

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


  const date = transformDate(data.post.date);

  return (
    <div>
      <div className="mx-auto mb-8 w-full max-w-[580px] rounded-md bg-red-200 py-4 text-center font-light">
        Preview page forrr {data.post.title}
      </div>
      <ArticleFeaturedImage
        imageUrl={data.post.featuredImage.node.sourceUrl}
        slug={data.post.slug}
      />
      <section className="mx-auto max-w-[580px] px-4 md:max-w-[720px]">
        <ArticleMetadata
          author={data.post.author.node.name}
          title={data.post.title}
          date={date}
        />
        <ArticleContent content={data.post.content} />
        <ArticleTags tags={data.post.tags.nodes} />
      </section>
    </div>
  );
};

export default Preview;
