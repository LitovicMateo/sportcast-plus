import { PostData } from "@/lib/api-types";
import { gql } from "@apollo/client";
import { getAuthClient } from "@faustwp/experimental-app-router";

const previewQuery = gql`
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
`;

export const fetchPostPreview = async (id: string | string[] | undefined) => {
  const client = await getAuthClient();

  const { data }: { data: { contentNode: PostData } } = await client!.query({
    query: previewQuery,
    variables: {
      id,
      idType: "DATABASE_ID",
      asPreview: true,
    },
  });

  return data;
};
