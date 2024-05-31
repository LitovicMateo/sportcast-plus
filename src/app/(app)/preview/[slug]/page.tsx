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

const Preview: React.FC<PreviewProps> = async (props) => {
  console.log(props.params.slug);

  const isPreview = hasPreviewProps(props);

  const id = props.params.slug;

  let client = isPreview ? await getAuthClient() : await getClient();

  if (!client) {
    redirect("/wp-login")
  }

  const { data } = await client!.query({
    query: gql`
    query GetPostPreview {
      post(id: "583", idType: DATABASE_ID) {
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    ` });

  console.log(data);

  return (
    <div>
      Preview page for {props.params.slug}
      <h2>{data.post.title}</h2>
      {/* {data && <div dangerouslySetInnerHTML={{ __html: data.contentNode.content }}></div>} */}
    </div>
  );
};

export default Preview;
