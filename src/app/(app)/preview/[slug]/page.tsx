import { gql } from "@apollo/client";
import { WordPressTemplate } from "@faustwp/core";
import { getAuthClient, getClient } from "@faustwp/experimental-app-router";

function hasPreviewProps(props: any) {
  return props?.searchParams?.preview === "true" && !!props?.searchParams?.p;
}

type Props = {
  props: {
    params: {
      slug: string;
    };
  };
};

export const Preview = async({ props }: Props) => {
  console.log(props.params.slug);

  const isPreview = hasPreviewProps(props);

  const id = props.params.slug;

  let client = isPreview ? await getAuthClient() : await getClient();

  const { data } = await client!.query({
    query: gql`
    query GetContentNode {
      contentNode(id: "583", idType: URI) {
        ... on NodeWithTitle {
          title
        }
        ... on NodeWithContentEditor {
          content
        }
        date
        slug
      }
    }    `,
    variables: {
      id,
      idType: isPreview ? "DATABASE_ID" : "URI",
      asPreview: isPreview,
    },
  });

  console.log(data);

  return (
    <div>
      Preview page for {props.params.slug}
      <h2>{data.contentNode.title}</h2>
      {data && <div dangerouslySetInnerHTML={{__html: data.contentNode.content}}></div>}
    </div>
  );
}

export default Preview