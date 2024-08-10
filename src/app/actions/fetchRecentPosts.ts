"use server";

import { PostData } from "@/lib/api-types";
import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";
import { revalidatePath } from "next/cache";
const query = gql`
  query FetchPosts($first: Int = 50) {
    posts(first: $first) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        date
        slug
        title
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
        content
      }
    }
  }
`;

export const fetchRecentPosts = async() => {
  const client = await getClient()

  const { data }: {data: {posts: {nodes: PostData[]}}} = await client.query({
    query: query,
  })

  return data.posts.nodes
}
